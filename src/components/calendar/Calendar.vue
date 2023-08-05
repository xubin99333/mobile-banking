<template>
  <div id="calendar" :class="{ change: isChange }">
    <!-- 星期 -->
    <ul class="weekdays">
      <li v-for="(vo, index) in weekdays" :key="index" v-text="vo"></li>
    </ul>
    <!-- 日期 -->
    <ul
      :class="{
        fadeOut: fadeOut,
        fadeIn: fadeIn,
        fadeOutR: fadeOutR,
        fadeInR: fadeInR,
      }"
      class="days"
      @touchstart="allTouchStart"
      @touchend="allTouchEnd"
      @touchstart.stop="touchStart"
      @touchend.stop="touchEnd"
    >
      <li
        v-for="(dayobject, index) in days"
        :key="index"
        :class="{
          weekend: index % 7 === 0 || (index + 1) % 7 === 0,
          'grey-color': new Date() > dayobject.day,
        }"
      >
        <div
          v-if="dayobject.day.getMonth() + 1 !== currentMonth"
          class="other-month"
          @click="otherMonth(dayobject.day.getDate())"
        >
          {{ dayobject.day.getDate() }}
        </div>
        <div v-else class="everyDay">
          <div
            v-if="
              dayobject.day.getFullYear() === new Date().getFullYear() &&
                dayobject.day.getMonth() === new Date().getMonth() &&
                dayobject.day.getDate() === new Date().getDate()
            "
            :class="[
              'active',
              dayobject.day.getDate() === otherDay ? 'otherday' : '',
            ]"
            @click="
              getDayMessage(currentYear, currentMonth, dayobject.day.getDate())
            "
          >
            {{ dayobject.day.getDate() }}
          </div>
          <div
            v-else
            :class="{ otherday: dayobject.day.getDate() === otherDay }"
            @click="
              getDayMessage(currentYear, currentMonth, dayobject.day.getDate())
            "
          >
            {{ dayobject.day.getDate() }}
          </div>
          <!-- 小圆点 -->
          <div
            :class="{
              circle: new Date() > dayobject.day && dayobject.status === '1',
              o: new Date() <= dayobject.day && dayobject.status === '1'
            }"
          />
        </div>
      </li>
    </ul>

    <!--背景色-->
    <div :class="{ change: isChange }" class="background">
      <div
        v-for="(value, index) in 5"
        :class="{ dbg: index % 2 === 0, lbg: index % 2 !== 0 }"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script>
import datetime from '@/assets/js/datetime-util.js'

export default {
  name: 'Calendar',
  props: {
    resTraList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  data () {
    return {
      currentDay: 1,
      currentMonth: 1,
      currentYear: 2021,
      currentWeek: 1,
      newWeek: 1,
      days: [],
      weekdays: [ '日', '一', '二', '三', '四', '五', '六' ],
      // 上下滑动的鼠标位置
      positionSX: '',
      positionEX: '',
      positionSY: '',
      positionEY: '',
      isChange: false,
      // 左右滑动动画的初始状态
      show: true,
      fadeOut: false,
      fadeIn: false,
      fadeOutR: false,
      fadeInR: false,
      monthList: [],
      status: '',
      otherDay: ''
    }
  },
  created () {
    this.initData(null)
    this.$goose.on('resume', () => {
      console.log('页面恢复监听成功---日历====')
      this.initData(null)
    },
    err => {
      console.log('页面恢复监听失败：', err)
    })
  },
  methods: {
    setDataType () {
      // console.log(this.resTraList, '--==--==--')
      for (let item of this.resTraList) {
        // console.log(item.businessType, '.businessType是什么')
        this.getMonthEventDay(item)
      }
    },

    /*
     *当前月份所有有日程的天（标记）接口获取
     *用法：直接在initData函数中最后位置调用即可
     */
    getMonthEventDay (toDoListData) {
      const self = this

      // console.log(toDoListData.backlogName, 'toDoListData.businessType是什么')
      self.days.forEach(item => {
        if (datetime.getFormatDate(item.day, '-') == toDoListData.backlogTime.substring(0, 10)) {
          item.status = '1'
          // console.log(toDoListData.backlogName, 'toDoListData.backlogName是什么')
        } else if (typeof (toDoListData.businessType) == 'undefined') {
          item.status = ''
        }
      })
    },
    //触发选中日期方法
    chooseDayMessage () {
      this.getDayMessage(this.currentYear, this.currentMonth, this.otherDay)
    },
    getDayMessage (y, m, d) {
      this.getCurrentWeek(y, m, d)
      const str = this.formatDate(y, m, d)

      let dataObj = {
        str: str,
        m: m,
        d: d
      }
      
      this.$emit('change', dataObj)
      this.otherDay = d
    },
    getCurrentWeek (y, m, d) {
      const w = `${y}-${m}-${d}`,
        weekArr = w.split('-'),
        weeks = new Date(weekArr[0], parseInt(weekArr[1] - 1, 10), weekArr[2])

      this.newWeek = weeks.getDay()
    },
    initData (cur) {
      let date

      console.log(cur, 'cur=========')
      if (cur) {
        date = new Date(cur)
      } else {
        date = new Date()
      }
      this.currentDay = date.getDate()
      this.currentYear = date.getFullYear()
      this.currentMonth = date.getMonth() + 1
      this.currentWeek = date.getDay()
      // 切换每月份时，默认选中1日
      if (!cur || !this.otherDay) {
        this.otherDay = new Date().getDate()
      } else {
        this.otherDay = 1
      }
      const str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay)

      this.days.length = 0
      //初始化本周
      for (let i = this.currentDay; i >= 0; i--) {
        const d = new Date(str)

        d.setDate(d.getDate() - i)
        //用一个对象包装Date对象 以便为以后预定功能添加属性
        const dayobject = {}

        dayobject.day = d
        dayobject.status = ''
        //将日期放入data 中的days数组 供页面渲染使用
        this.days.push(dayobject)
      }
      //其他周
      for (let i = 1; i <= 34 - this.currentWeek; i++) {
        // for (let i = 1; i <= 34 - this.currentWeek; i++) {
        const d = new Date(str)

        d.setDate(d.getDate() + i)
        const dayobject = {}

        dayobject.day = d
        dayobject.status = ''
        this.days.push(dayobject)
        if (i > 20 && d.getMonth() + 1 !== this.currentMonth) {
          //将日期放入data 中的days数组 供页面渲染使用
          this.days.pop()
        }
      }
      //选中日期在其他月份是否超出最大日期判断
      const arr = []

      for (let j = 0, length = this.days.length; j < length; j++) {
        if (this.days[j].day.getMonth() + 1 === this.currentMonth) {
          arr.push(this.days[j].day.getDate())
        }
      }

      this.getDayMessage(this.currentYear, this.currentMonth, this.otherDay)
      // 给日志设置标志
      this.setDataType()
    },
    otherMonth (day) {
      if (day < 15) {
        this.rightSliding()
      } else if (day > 15) {
        this.leftSliding()
      }
    },
    addSchedule () {
      this.$emit('add')
    },
    //向下滑监听坐标
    allTouchStart (e) {
      //开始x轴坐标
      this.positionSX = e.changedTouches[0].clientX
      //开始y轴坐标
      this.positionSY = e.changedTouches[0].clientY
    },
    allTouchEnd (e) {
      //结束x轴坐标
      this.positionEX = e.changedTouches[0].clientX
      //结束y轴坐标
      this.positionEY = e.changedTouches[0].clientY
      const distanceY = this.positionEY - this.positionSY,
        distanceX = this.positionSX - this.positionEX

      //判断滑动的方向
      if (distanceY < -30 && Math.abs(distanceY) > Math.abs(distanceX)) {
        this.isChange = true
      }
      if (distanceY > 30 && Math.abs(distanceY) > Math.abs(distanceX)) {
        this.isChange = false
      }
    },

    //监听左右滑动坐标
    touchStart (e) {
      //开始x轴坐标
      this.positionSX = e.changedTouches[0].clientX
      //开始y轴坐标
      this.positionSY = e.changedTouches[0].clientY
    },
    touchEnd (e) {
      this.show = !this.show
      //结束x轴坐标
      this.positionEX = e.changedTouches[0].clientX
      //结束y轴坐标
      this.positionEY = e.changedTouches[0].clientY
      const distanceY = this.positionEY - this.positionSY,
        distanceX = this.positionSX - this.positionEX

      //判断滑动 的方向
      if (distanceX > 30 && Math.abs(distanceY) < Math.abs(distanceX)) {
        this.rightSliding()
      }
      if (distanceX < -30 && Math.abs(distanceY) < Math.abs(distanceX)) {
        this.leftSliding()
      }
    },
    //向右滑动
    rightSliding () {
      const self = this

      self.pickNext(self.currentYear, self.currentMonth)
      self.fadeOut = true
      self.fadeIn = false
      self.fadeInR = false
      self.fadeOutR = false
      self.otherDay = 1
      setTimeout(() => {
        self.fadeIn = true
        self.fadeOut = false
        self.fadeOutR = false
        self.fadeInR = false
      }, 100)
      this.$emit('sliding', { status: 1 })
    },
    //向左滑动
    leftSliding () {
      const self = this

      self.pickPre(self.currentYear, self.currentMonth)
      self.otherDay = 1
      self.fadeOutR = true
      self.fadeInR = false
      self.fadeOut = false
      self.fadeIn = false
      setTimeout(() => {
        self.fadeInR = true
        self.fadeOutR = false
        self.fadeOut = false
        self.fadeIn = false
      }, 100)
      this.$emit('sliding', { status: 1 })
    },
    // 判断次月份有多少天
    getCountDays (ym) {
      let curDate = new Date(ym),
        curMonth = curDate.getMonth()

      // 生成实际的月份: 由于curMonth会比实际月份小1, 故需加1
      curDate.setMonth(curMonth + 1)
      // 将日期设置为0
      curDate.setDate(0)
      // 返回当月的天数

      return curDate.getDate()
    },
    // 上个月信息
    pickPre (year, month) {
      const d = new Date(this.formatDate(year, month, 1))

      d.setDate(0)
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },
    // 下个月信息
    pickNext (year, month) {
      const d = new Date(this.formatDate(year, month, 1))

      d.setDate(35)
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },
    toThisMonth () {
      this.initData(null)
    },
    // 补零处理
    formatDate (year, month, day) {
      let y = year,
        m = month
        
      if (m < 10) {
        m = '0' + m
      }
      let d = day

      if (d < 10) {
        d = '0' + d
      }

      return y + '-' + m + '-' + d
    }
  }
}
</script>

<style lang="less" scoped>
#calendar {
  width: 100%;
  height: auto;
  margin: 0 auto;
  transition: all 0.3s;
  overflow: hidden;
  background: @white;

  .change {
    height: 250px !important;
  }

  .year-month {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    .top-time {
      color: @black-dark;
      font-size: 16px;
      font-weight: 500;
      margin-right: 15px;
    }
  }

  .weekdays {
    margin: 0;
    height: 40px;
    font-family: PingFangSC-Medium;
    font-size: 15px;
    color: @black-dark;
    letter-spacing: 0.18px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    li {
      display: inline-block;
      width: 14%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .days {
    min-height: 210px;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: hidden;
    position: relative;
    .grey-color {
      color: @grey-dark;
    }

    li {
      list-style-type: none;
      display: inline-block;
      height: 42px;
      width: 14%;
      text-align: center;
      font-size: 14px;
      color: @black-dark;
      position: relative;

      .active {
        border-radius: 50%;
        // background: #7aa2ab;
        color: @mb-blue;
        width: 40px;
        height: 40px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .other-month {
        width: 40px;
        height: 40px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        color: @mb-gray-dark;
        display: none;
      }

      .everyDay {
        width: 40px;
        height: 40px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .circle {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        transform:scale(1.05);
        background-color: @grey-dark;
        position: absolute;
        bottom: 6px;
        left: 47%;
      }

      .o {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        transform:scale(1.05);
        background-color: @mb-circle;
        position: absolute;
        bottom: 6px;
        left: 47%;
      }

      .n{
         width: 4px;
        height: 4px;
        border-radius: 50%;
        // border: 1px solid #7aa2ab;
        background-color: transparent;
        position: absolute;
        bottom: 6px;
        left: 49%;
      }

      .otherday {
        width: 38px;
        height: 38px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: @mb-blue;
        // border: 1px solid #b2b2b2;
        background: #dfe7e8;
      }
    }
  }

  .fadeOut {
    animation-name: fadeOut;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
  }

  .fadeOutR {
    animation-name: fadeOutR;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
  }

  .fadeIn {
    animation-name: fadeIn;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
  }

  .fadeInR {
    animation-name: fadeInR;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
  }

  .background {
    position: absolute;
    top: 100px;
    height: 211px;
    width: 92%;
    z-index: -1;
    overflow: hidden;
    transition: all 0.3s;

    .dbg {
      background-color: @mb-gray-1e;
      height: 42.2px;
    }

    .lbg {
      background-color: @mb-gray-5d;
      height: 42.2px;
    }
  }
}

@keyframes fadeOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}

@keyframes fadeIn {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOutR {
  0% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

@keyframes fadeInR {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
