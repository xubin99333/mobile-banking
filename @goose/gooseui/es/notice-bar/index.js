import { createNamespace, isDef } from '../utils';
import { doubleRaf, raf } from '../utils/dom/raf';
import { BindEventMixin } from '../mixins/bind-event';
import Icon from '../icon';

var _createNamespace = createNamespace('notice-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  mixins: [BindEventMixin(function (bind) {
    // fix cache issues with forwards and back history in safari
    // see: https://guwii.com/cache-issues-with-forwards-and-back-history-in-safari/
    bind(window, 'pageshow', this.start);
  })],
  inject: {
    goosePopup: {
      default: null
    }
  },
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    scrollable: {
      type: Boolean,
      default: null
    },
    delay: {
      type: [Number, String],
      default: 1
    },
    speed: {
      type: [Number, String],
      default: 60
    }
  },
  data: function data() {
    return {
      show: true,
      offset: 0,
      duration: 0,
      wrapWidth: 0,
      contentWidth: 0
    };
  },
  watch: {
    scrollable: 'start',
    text: {
      handler: 'start',
      immediate: true
    }
  },
  created: function created() {
    var _this = this;

    // https://github.com/youzan/vant/issues/8634
    if (this.goosePopup) {
      this.goosePopup.onReopen(function () {
        _this.start();
      });
    }
  },
  activated: function activated() {
    this.start();
  },
  methods: {
    onClickIcon: function onClickIcon(event) {
      if (this.mode === 'closeable') {
        this.show = false;
        this.$emit('close', event);
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      var _this2 = this;

      this.offset = this.wrapWidth;
      this.duration = 0; // wait for Vue to render offset
      // using nextTick won't work in iOS14

      raf(function () {
        // use double raf to ensure animation can start
        doubleRaf(function () {
          _this2.offset = -_this2.contentWidth;
          _this2.duration = (_this2.contentWidth + _this2.wrapWidth) / _this2.speed;

          _this2.$emit('replay');
        });
      });
    },
    reset: function reset() {
      this.offset = 0;
      this.duration = 0;
      this.wrapWidth = 0;
      this.contentWidth = 0;
    },
    start: function start() {
      var _this3 = this;

      var delay = isDef(this.delay) ? this.delay * 1000 : 0;
      this.reset();
      clearTimeout(this.startTimer);
      this.startTimer = setTimeout(function () {
        var _this3$$refs = _this3.$refs,
            wrap = _this3$$refs.wrap,
            content = _this3$$refs.content;

        if (!wrap || !content || _this3.scrollable === false) {
          return;
        }

        var wrapWidth = wrap.getBoundingClientRect().width;
        var contentWidth = content.getBoundingClientRect().width;

        if (_this3.scrollable || contentWidth > wrapWidth) {
          doubleRaf(function () {
            _this3.offset = -contentWidth;
            _this3.duration = contentWidth / _this3.speed;
            _this3.wrapWidth = wrapWidth;
            _this3.contentWidth = contentWidth;
          });
        }
      }, delay);
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];
    var slots = this.slots,
        mode = this.mode,
        leftIcon = this.leftIcon,
        onClickIcon = this.onClickIcon;
    var barStyle = {
      color: this.color,
      background: this.background
    };
    var contentStyle = {
      transform: this.offset ? "translateX(" + this.offset + "px)" : '',
      transitionDuration: this.duration + 's'
    };

    function LeftIcon() {
      var slot = slots('left-icon');

      if (slot) {
        return slot;
      }

      if (leftIcon) {
        return h(Icon, {
          "class": bem('left-icon'),
          "attrs": {
            "name": leftIcon
          }
        });
      }
    }

    function RightIcon() {
      var slot = slots('right-icon');

      if (slot) {
        return slot;
      }

      var iconName;

      if (mode === 'closeable') {
        iconName = 'cross';
      } else if (mode === 'link') {
        iconName = 'arrow';
      }

      if (iconName) {
        return h(Icon, {
          "class": bem('right-icon'),
          "attrs": {
            "name": iconName
          },
          "on": {
            "click": onClickIcon
          }
        });
      }
    }

    return h("div", {
      "attrs": {
        "role": "alert"
      },
      "directives": [{
        name: "show",
        value: this.show
      }],
      "class": bem({
        wrapable: this.wrapable
      }),
      "style": barStyle,
      "on": {
        "click": function click(event) {
          _this4.$emit('click', event);
        }
      }
    }, [LeftIcon(), h("div", {
      "ref": "wrap",
      "class": bem('wrap'),
      "attrs": {
        "role": "marquee"
      }
    }, [h("div", {
      "ref": "content",
      "class": [bem('content'), {
        'goose-ellipsis': this.scrollable === false && !this.wrapable
      }],
      "style": contentStyle,
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [this.slots() || this.text])]), RightIcon()]);
  }
});