import Vue from 'vue';
import { deepAssign } from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';
var proto = Vue.prototype;
/* @ts-ignore */

var defineReactive = Vue.util.defineReactive;
defineReactive(proto, '$gooseLang', 'zh-CN');
defineReactive(proto, '$gooseMessages', {
  'zh-CN': defaultMessages
});
export default {
  messages: function messages() {
    return proto.$gooseMessages[proto.$gooseLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$gooseLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    deepAssign(proto.$gooseMessages, messages);
  }
};