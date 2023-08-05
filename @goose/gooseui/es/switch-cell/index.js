import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import _extends from "@babel/runtime/helpers/esm/extends";
// Utils
import { createNamespace } from '../utils';
import { inherit } from '../utils/functional'; // Components

import Cell from '../cell';
import Switch from '../switch';
import { switchProps } from '../switch/shared'; // Types

var _createNamespace = createNamespace('switch-cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SwitchCell(h, props, slots, ctx) {
  if (process.env.NODE_ENV === 'development') {
    console.warn('[GooseUI] "SwitchCell" component is deprecated, see: https://goosedoc.mengqingyun.cn:8443/#/zh-CN/switch-cell.');
  }

  return h(Cell, _mergeJSXProps([{
    "attrs": {
      "center": true,
      "size": props.cellSize,
      "title": props.title,
      "border": props.border
    },
    "class": bem([props.cellSize])
  }, inherit(ctx)]), [h(Switch, {
    "props": _extends({}, props),
    "on": _extends({}, ctx.listeners)
  })]);
}

SwitchCell.props = _extends({}, switchProps, {
  title: String,
  cellSize: String,
  border: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: '24px'
  }
});
export default createComponent(SwitchCell);