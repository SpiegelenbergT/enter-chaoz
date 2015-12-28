System.register([], function(exports_1) {
    "use strict";
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(title) {
                    this.id = Math.floor(Math.random() * 11);
                    this.title = title;
                }
                return Todo;
            })();
            exports_1("Todo", Todo);
        }
    }
});

//# sourceMappingURL=todo.js.map
