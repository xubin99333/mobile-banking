"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _deepAssign = require("../utils/deep-assign");

var _zhCN = _interopRequireDefault(require("./lang/zh-CN"));

var proto = _vue.default.prototype;
/* @ts-ignore */

var defineReactive = _vue.default.util.defineReactive;
defineReactive(proto, '$gooseLang', 'zh-CN');
defineReactive(proto, '$gooseMessages', {
  'zh-CN': _zhCN.default
});
var _default = {
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

    (0, _deepAssign.deepAssign)(proto.$gooseMessages, messages);
  }
};
exports.default = _default;