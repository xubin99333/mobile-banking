export var context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],
  find: function find(vm) {
    return this.stack.filter(function (item) {
      return item.vm === vm;
    })[0];
  },
  remove: function remove(vm) {
    var index = this.stack.findIndex(function (item) {
      return item.vm === vm;
    });

    if (index > -1) {
      this.stack[index].vm = null;
      this.stack.splice(index, 1);
    }
  }
};