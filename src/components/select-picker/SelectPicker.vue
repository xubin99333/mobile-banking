<template>
  <div>
    <goose-cell-group class="g_cell">
      <goose-field
        :label="title"
        v-model="currentValue"
        :placeholder="placeholder"
        input-align="right"
        right-icon="arrow"
        readonly
        clickable
        @click="showSelectPicker"
      />
    </goose-cell-group>
    <goose-popup v-model="showPicker" position="bottom">
      <goose-picker
        :columns="currentColumns"
        :default-index="defaultCurrentIndex"
        show-toolbar
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </goose-popup>
    <goose-calendar
      :title="title"
      v-model="showCalendar"
      :show-subtitle="true"
      :show-title="true"
      :max-date="currentMaxDate"
      :min-date="currentMinDate"
      :default-date="currentDate"
      class="calendar"
      @confirm="onConfirmDate"
    />
  </div>
</template>

<script>
import datetime from '@/assets/js/datetime-util.js'

export default {
  name: 'SelectPicker',
  props: {
    //选择栏格式，date则为日期，picker则为选择框
    type: {
      type: null,
      default: 'picker'
    },
    //title
    title: {
      type: String,
      default: ''
    },
    //提示文字
    placeholder: {
      type: String,
      default: ''
    },
    //选择列表
    columns: {
      type: Array,
      default: function () {
        return []
      }
    },
    //选中值
    value: {
      type: null,
      default: ''
    },
    //最大日期
    maxDate: {
      type: String,
      default: ''
    },
    //最小日期
    minDate: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      //默认日期选择最大日期
      currentMaxDate: new Date(2025, 12, 31),
      //默认日期选择最小日期
      currentMinDate: new Date(),
      //展示选择
      showPicker: false,
      //选项列表
      currentColumns: [],
      //选中text
      currentValue: '',
      //选中值
      currentIndex: '',
      //展示日期
      showCalendar: false,
      //默认选中索引
      defaultCurrentIndex: '',
      //默认选中日期
      currentDate: new Date()
    }
  },

  watch: {
    value () {
      this.currentIndex = this.value
      if (this.type == 'picker') {
        this.currentColumns = []
        for (let i = 0; i < this.columns.length; i++) {
          this.currentColumns.push(this.columns[i].text)
          if (this.currentIndex == this.columns[i].key) {
            this.currentValue = this.columns[i].text
            this.defaultCurrentIndex = i
          }
        }
      } else if (this.type == 'date') {
        if (this.value.length == 8) {
          this.currentValue = this.value
          this.currentDate = new Date(datetime.transformDate(this.currentValue, '-').replace(/-/g, '/'))
        } else if (this.value.length == 10) {
          this.currentValue = this.value
          this.currentDate = new Date(datetime.transformDate(this.currentValue).replace(/-/g, '/'))
        } else {
          this.currentValue = ''
        }
        if (this.maxDate != '') {
          this.currentMaxDate = new Date(datetime.transformDate(this.maxDate, '-').replace(/-/g, '/'))
        }
        if (this.minDate != '') {
          this.currentMinDate = new Date(datetime.transformDate(this.minDate, '-').replace(/-/g, '/'))
        }
      }
    }
  },
  created () {
    this.currentIndex = this.value
    if (this.type == 'picker') {
      for (let i = 0; i < this.columns.length; i++) {
        this.currentColumns.push(this.columns[i].text)
        if (this.currentIndex == this.columns[i].key) {
          this.currentValue = this.columns[i].text
          this.defaultCurrentIndex = i
        }
      }
    } else if (this.type == 'date') {
      if (this.value.length == 8) {
        this.currentValue = this.value
        this.currentDate = new Date(datetime.transformDate(this.currentValue, '-').replace(/-/g, '/'))
      } else if (this.value.length == 10) {
        this.currentValue = this.value
        this.currentDate = new Date(datetime.transformDate(this.currentValue).replace(/-/g, '/'))
      } else {
        this.currentValue = ''
      }
      if (this.maxDate != '') {
        this.currentMaxDate = new Date(datetime.transformDate(this.maxDate, '-').replace(/-/g, '/'))
      }
      if (this.minDate != '') {
        this.currentMinDate = new Date(datetime.transformDate(this.minDate, '-').replace(/-/g, '/'))
      }
    }
  },
  
  methods: {
    //确定日期
    onConfirmDate (date) {
      this.showCalendar = false
      this.currentValue = datetime.getFormatDate(date, '-')
      console.log('this.currentValue ', datetime.getFormatDate(date))
      this.$emit('input', this.currentValue)
    },
    //展示弹窗
    showSelectPicker () {
      if (this.type == 'picker') {
        this.showPicker = true
      } else if (this.type == 'date') {
        this.showCalendar = true
      }
    },
    //展示popup
    showPopup () {
      this.showPicker = !this.showPicker
    },
    //关闭popup
    closePopup () {
      this.showPicker = false
    },
    //选中
    onConfirm (val) {
      for (let i = 0; i < this.columns.length; i++) {
        if (val == this.columns[i].text) {
          this.currentValue = this.columns[i].text
          this.currentIndex = this.columns[i].key
          this.$emit('input', this.currentIndex)
          this.showPopup()
          break
        }
      }
    }
  }
}
</script>
