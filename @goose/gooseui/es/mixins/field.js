export var FieldMixin = {
  inject: {
    gooseField: {
      default: null
    }
  },
  watch: {
    value: function value() {
      var field = this.gooseField;

      if (field) {
        field.resetValidation();
        field.validateWithTrigger('onChange');
      }
    }
  },
  created: function created() {
    var field = this.gooseField;

    if (field && !field.children) {
      field.children = this;
    }
  }
};