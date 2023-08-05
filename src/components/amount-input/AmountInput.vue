<template>
  <div class="g_amount_input">
    <div class="tran_amountTitle">{{ title }}</div>
    <div class="formatAmount">{{ amountValue | formatMoney }}</div>
    <div class="g_amount">
      <div class="g_money">￥</div>
      <goose-field
        ref="Field"
        v-model="amountValue"
        :placeholder="placeholder"
        :input-align="inputAlign"
        :formatter="formatterMoney"
        class="amfield"
        type="number"
        @blur="blurMoney()"
        @click="focusField"
      />
    </div>
  </div>
</template>

<script>
import moneyUtil from '@/assets/js/money-util.js'

export default {
  name: 'AmountInput',
  filters: {
    formatMoney: val => {
      if (val != '') {
        return moneyUtil.currencyToUpCase(val)
      } else {
        return val
      }
    }
  },

  props: {
    //title
    title: {
      type: null,
      default: ''
    },
    //默认提示文字
    placeholder: {
      type: null,
      default: ''
    },
    //绑定值
    value: {
      type: null,
      default: ''
    },
    //输入文字水平居中类型
    inputAlign: {
      type: null,
      default: 'left'
    }
  },

  data () {
    return {
      amountValue: ''
    }
  },

  watch: {
    value (val) {
      this.amountValue = val
    },
    amountValue (val) {
      this.$emit('input', val)
    }
  },

  mounted () {
    this.amountValue = this.value
  },

  methods: {
    //输入时格式化金额,只就可以输入小数点2位
    formatterMoney (value) {
      if (value == '' || String(value) == 'undefined') {
        return value
      } else if (value.substr(0, 1) == '.') {
        return '0.' + value
      }

      return moneyUtil.moneyToFixed(value)
    },
    //输入框失去焦点事件，处理数字
    blurMoney () {
      if (this.amountValue != '') {
        this.amountValue = moneyUtil.formatCurrency(this.amountValue)
      }
    },
    focusField () {
      this.$refs.Field.focus()
    }
  }
}
</script>

<style lang="less" scoped>
.g_amount_input {
  height: 102px;
  width: 100%;
  .tran_amountTitle {
    font-size: 16px;
    color: @black-dark-3a;
    letter-spacing: 0.17px;
    text-align: left;
    padding-left: 24px;
    height: 28px;
    line-height: 28px;
    padding-top: 10px;
    font-weight: 700;
  }
  .formatAmount {
    font-size: 13px;
    color: @gray-6;
    letter-spacing: 0.17px;
    text-align: left;
    padding-left: 24px;
    height: 18px;
    line-height: 18px;
    padding-top: 6px;
  }
  .g_amount {
    margin-top: 5px;
    border-bottom: 1px solid @light-grey-0f;
    padding-left: 10px;
    height: 50px;
    line-height: 50px;
    .g_money {
      font-size: 20px;
      width: 18px;
      float: left;
      line-height: 50px;
      margin-left: 12px;
      font-weight: 700;
    }
    .amfield {
      line-height: 48px;
      width: 80%;
      float: left;
      font-size: 20px;
      font-weight: 700;
      padding: 0;
      padding-left: 6px;
    }
  }
}
</style>
