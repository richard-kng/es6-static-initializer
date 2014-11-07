import log from "../node_modules/es6-log/es6.log";
import staticInitializer from "../src/es6.static.initializer";

class A {
    static static_initializer() {
        log("static_initializer");
    }
};

log(A);
staticInitializer.apply(A);
log(A);