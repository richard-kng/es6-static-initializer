System.register("src_es6.static.initializer", [], function() {
  "use strict";
  var __moduleName = "src_es6.static.initializer";
  var self = function staticInitializer(value) {};
  self.apply = function(class_) {
    var element,
        object;
    for (element in class_) {
      if (class_.hasOwnProperty(element) && (element === "static_initializer" || element === "staticInitializer")) {
        object = class_[$traceurRuntime.toProperty(element)];
        if (typeof object === "function") {
          class_[$traceurRuntime.toProperty(element)]();
        }
        delete class_[$traceurRuntime.toProperty(element)];
        break;
      }
    }
  };
  var $__default = self;
  return {get default() {
      return $__default;
    }};
});
