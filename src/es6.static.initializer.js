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