"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _interceptor = require("../utils/interceptor");

var _relation = require("../mixins/relation");

var _createNamespace = (0, _utils.createNamespace)('tabbar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ParentMixin)('gooseTabbar')],
  props: {
    route: Boolean,
    zIndex: [Number, String],
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    value: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: null
    }
  },
  data: function data() {
    return {
      height: null
    };
  },
  computed: {
    fit: function fit() {
      if (this.safeAreaInsetBottom !== null) {
        return this.safeAreaInsetBottom;
      } // enable safe-area-inset-bottom by default when fixed


      return this.fixed;
    }
  },
  watch: {
    value: 'setActiveItem',
    children: 'setActiveItem'
  },
  mounted: function mounted() {
    if (this.placeholder && this.fixed) {
      this.height = this.$refs.tabbar.getBoundingClientRect().height;
    }
  },
  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.children.forEach(function (item, index) {
        item.active = (item.name || index) === _this.value;
      });
    },
    onChange: function onChange(active) {
      var _this2 = this;

      if (active !== this.value) {
        (0, _interceptor.callInterceptor)({
          interceptor: this.beforeChange,
          args: [active],
          done: function done() {
            _this2.$emit('input', active);

            _this2.$emit('change', active);
          }
        });
      }
    },
    genTabbar: function genTabbar() {
      var _ref;

      var h = this.$createElement;
      return h("div", {
        "ref": "tabbar",
        "style": {
          zIndex: this.zIndex
        },
        "class": [(_ref = {}, _ref[_constant.BORDER_TOP_BOTTOM] = this.border, _ref), bem({
          unfit: !this.fit,
          fixed: this.fixed
        })]
      }, [this.slots()]);
    }
  },
  render: function render() {
    var h = arguments[0];

    if (this.placeholder && this.fixed) {
      return h("div", {
        "class": bem('placeholder'),
        "style": {
          height: this.height + "px"
        }
      }, [this.genTabbar()]);
    }

    return this.genTabbar();
  }
});

exports.default = _default;