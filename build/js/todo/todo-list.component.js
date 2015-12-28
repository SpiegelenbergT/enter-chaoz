System.register(['angular2/common', 'angular2/core', './todo.service', './todo-item.component'], function(exports_1) {
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
    var common_1, core_1, todo_service_1, todo_item_component_1;
    var TodoListComponent;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_item_component_1_1) {
                todo_item_component_1 = todo_item_component_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent(todoService) {
                    this.todoService = todoService;
                    this.todoService.fetch();
                }
                TodoListComponent.prototype.delete = function (todo) {
                    this.todoService.delete(todo);
                };
                TodoListComponent.prototype.update = function (todo) {
                    this.todoService.update(todo);
                };
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-list'
                    }),
                    core_1.View({
                        directives: [common_1.NgFor, todo_item_component_1.TodoItemComponent],
                        template: "\n\t\t<ul class=\"list-unstyled\">\n\t\t\t<li *ngFor=\"#todo of todoService.todos\">\n\t\t\t\t<todo-item\n\t\t\t\t\t[todo]=\"todo\"\n\t\t\t\t\t(delete)=\"delete(todo)\"\n\t\t\t\t\t(update)=\"update(todo)\">\n\t\t\t\t</todo-item>\n\t\t\t</li>\n\t\t</ul>\n\t"
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoListComponent);
                return TodoListComponent;
            })();
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});

//# sourceMappingURL=todo-list.component.js.map
