"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  name: 'Name',
  tel: 'Phone',
  save: 'Save',
  confirm: 'Confirm',
  cancel: 'Cancel',
  delete: 'Delete',
  complete: 'Complete',
  loading: 'Loading...',
  telEmpty: 'Please fill in the tel',
  nameEmpty: 'Please fill in the name',
  nameInvalid: 'Malformed name',
  confirmDelete: 'Are you sure you want to delete?',
  telInvalid: 'Malformed phone number',
  gooseCalendar: {
    end: 'End',
    start: 'Start',
    title: 'Calendar',
    startEnd: 'Start/End',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "Choose no more than " + maxRange + " days";
    }
  },
  gooseCascader: {
    select: 'Select'
  },
  gooseContactCard: {
    addText: 'Add contact info'
  },
  gooseContactList: {
    addText: 'Add new contact'
  },
  goosePagination: {
    prev: 'Previous',
    next: 'Next'
  },
  goosePullRefresh: {
    pulling: 'Pull to refresh...',
    loosing: 'Loose to refresh...'
  },
  gooseSubmitBar: {
    label: 'Total：'
  },
  gooseCoupon: {
    unlimited: 'Unlimited',
    discount: function discount(_discount) {
      return _discount * 10 + "% off";
    },
    condition: function condition(_condition) {
      return "At least " + _condition;
    }
  },
  gooseCouponCell: {
    title: 'Coupon',
    tips: 'No coupons',
    count: function count(_count) {
      return "You have " + _count + " coupons";
    }
  },
  gooseCouponList: {
    empty: 'No coupons',
    exchange: 'Exchange',
    close: 'Close',
    enable: 'Available',
    disabled: 'Unavailable',
    placeholder: 'Coupon code'
  },
  gooseAddressEdit: {
    area: 'Area',
    postal: 'Postal',
    areaEmpty: 'Please select a receiving area',
    addressEmpty: 'Address can not be empty',
    postalEmpty: 'Wrong postal code',
    defaultAddress: 'Set as the default address',
    telPlaceholder: 'Phone',
    namePlaceholder: 'Name',
    areaPlaceholder: 'Area'
  },
  gooseAddressEditDetail: {
    label: 'Address',
    placeholder: 'Address'
  },
  gooseAddressList: {
    add: 'Add new address'
  }
};
exports.default = _default;