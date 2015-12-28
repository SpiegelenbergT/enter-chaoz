System.register(['angular2/http', 'angular2/core', './todo.service', './todo-list.component', './todo-input.component', '../shared/services/rest.service'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, todo_service_1, todo_list_component_1, todo_input_component_1, rest_service_1;
    var TodoComponent;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_list_component_1_1) {
                todo_list_component_1 = todo_list_component_1_1;
            },
            function (todo_input_component_1_1) {
                todo_input_component_1 = todo_input_component_1_1;
            },
            function (rest_service_1_1) {
                rest_service_1 = rest_service_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent() {
                    this.header = 'Todo';
                }
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            rest_service_1.RestOptions,
                            rest_service_1.RestService,
                            todo_service_1.TodoService
                        ]
                    }),
                    core_1.View({
                        directives: [todo_input_component_1.TodoInputComponent, todo_list_component_1.TodoListComponent],
                        template: "\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t\t\t<p>For this example we're using\n\t\t\t\t\t<a href=\"http://jsonplaceholder.typicode.com/\" target=\"_blank\">\n\t\t\t\t\t\tJSONPlaceholder - Fake Online REST API for Testing and Prototyping\n\t\t\t\t\t</a>.\n\t\t\t\t</p>\n\t\t\t\t<todo-input></todo-input>\n\t\t\t\t<br>\n\t\t\t\t<todo-list></todo-list>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoComponent);
                return TodoComponent;
            })();
            exports_1("TodoComponent", TodoComponent);
        }
    }
});

//# sourceMappingURL=todo.component.js.map
