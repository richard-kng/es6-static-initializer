System.register("test_es6.static.initializer.test", [], function() {
  "use strict";
  var __moduleName = "test_es6.static.initializer.test";
  var log = System.get("../node_modules/es6-log/es6.log").default;
  var staticInitializer = System.get("../src/es6.static.initializer").default;
  var A = function A() {};
  ($traceurRuntime.createClass)(A, {}, {static_initializer: function() {
      log("static_initializer");
    }});
  ;
  log(A);
  staticInitializer.apply(A);
  log(A);
  return {};
});
