/*
 es6.static.initializer 1.0.1 Copyright (c) 2014 "Richard KnG" Richárd Szakács
 Licensed under the MIT license.
 see: https://github.com/richard-kng/es6-static-initializer for details
*/
const self = function staticInitializer(value) {};

self.apply = function(class_) {
    var element,
        object;

    for(element in class_) {
        if(class_.hasOwnProperty(element) &&
          (element === "static_initializer" || element === "staticInitializer")) {
            object = class_[element];
            if(typeof object === "function") {
                class_[element]();
            }
            delete class_[element];
            break;
        }
    }
};

export default self;