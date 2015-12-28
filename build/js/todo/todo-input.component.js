System.register(['angular2/core', 'angular2/common', './todo', './todo.service', '../shared/directives/log-element.directive'], function(exports_1) {
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
    var core_1, common_1, todo_1, todo_service_1, log_element_directive_1;
    var TodoInputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (log_element_directive_1_1) {
                log_element_directive_1 = log_element_directive_1_1;
            }],
        execute: function() {
            TodoInputComponent = (function () {
                function TodoInputComponent(todoService) {
                    this.todoService = todoService;
                    this.todo = new todo_1.Todo();
                }
                TodoInputComponent.prototype.submit = function (todo) {
                    if (!todo.title) {
                        return;
                    }
                    this.todoService.create(todo);
                    this.todo = new todo_1.Todo();
                };
                TodoInputComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-input'
                    }),
                    core_1.View({
                        directives: [common_1.FORM_DIRECTIVES, log_element_directive_1.LogElement],
                        template: "\n\t\t<form (ngSubmit)=\"submit(todo)\">\n\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\tclass=\"form-control form-control-lg\"\n\t\t\t\tplaceholder=\"new todo, press enter to save\"\n\t\t\t\t[(ngModel)]=\"todo.title\"\n\t\t\t\tlogElement>\n\t\t</form>\n\t"
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoInputComponent);
                return TodoInputComponent;
            })();
            exports_1("TodoInputComponent", TodoInputComponent);
        }
    }
});

//# sourceMappingURL=todo-input.component.js.map
