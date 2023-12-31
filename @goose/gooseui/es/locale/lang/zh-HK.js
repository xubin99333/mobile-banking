export default {
  name: '姓名',
  tel: '電話',
  save: '保存',
  confirm: '確認',
  cancel: '取消',
  delete: '刪除',
  complete: '完成',
  loading: '加載中...',
  telEmpty: '請填寫電話',
  nameEmpty: '請填寫姓名',
  nameInvalid: '請輸入正確的姓名',
  confirmDelete: '確定要刪除嗎',
  telInvalid: '請填寫正確的電話',
  gooseCalendar: {
    end: '結束',
    start: '開始',
    title: '日期選擇',
    confirm: '確定',
    startEnd: '開始/結束',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: function monthTitle(year, month) {
      return year + "\u5E74" + month + "\u6708";
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "\u9078\u64C7\u5929\u6578\u4E0D\u80FD\u8D85\u904E " + maxRange + " \u5929";
    }
  },
  gooseCascader: {
    select: '請選擇'
  },
  gooseContactCard: {
    addText: '添加聯系人'
  },
  gooseContactList: {
    addText: '新建聯系人'
  },
  goosePagination: {
    prev: '上一頁',
    next: '下一頁'
  },
  goosePullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '釋放即可刷新...'
  },
  gooseSubmitBar: {
    label: '合計：'
  },
  gooseCoupon: {
    unlimited: '無使用門檻',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EFF" + _condition + "\u5143\u53EF\u7528";
    }
  },
  gooseCouponCell: {
    title: '優惠券',
    tips: '暫無可用',
    count: function count(_count) {
      return _count + "\u5F35\u53EF\u7528";
    }
  },
  gooseCouponList: {
    empty: '暫無優惠券',
    exchange: '兌換',
    close: '不使用優惠',
    enable: '可使用優惠券',
    disabled: '不可使用優惠券',
    placeholder: '請輸入優惠碼'
  },
  gooseAddressEdit: {
    area: '地區',
    postal: '郵政編碼',
    areaEmpty: '請選擇地區',
    addressEmpty: '請填寫詳細地址',
    postalEmpty: '郵政編碼格式不正確',
    defaultAddress: '設為默認收貨地址',
    telPlaceholder: '收貨人手機號',
    namePlaceholder: '收貨人姓名',
    areaPlaceholder: '選擇省 / 市 / 區'
  },
  gooseAddressEditDetail: {
    label: '詳細地址',
    placeholder: '街道門牌、樓層房間號等信息'
  },
  gooseAddressList: {
    add: '新增地址'
  }
};