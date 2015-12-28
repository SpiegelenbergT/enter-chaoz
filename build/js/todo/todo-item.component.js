System.register(['angular2/common', 'angular2/core', '../shared/pipes/truncate.pipe'], function(exports_1) {
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
    var common_1, core_1, truncate_pipe_1;
    var TodoItemComponent;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (truncate_pipe_1_1) {
                truncate_pipe_1 = truncate_pipe_1_1;
            }],
        execute: function() {
            TodoItemComponent = (function () {
                function TodoItemComponent() {
                    this.editing = false;
                    this.deleteEmitter = new core_1.EventEmitter();
                    this.updateEmitter = new core_1.EventEmitter();
                }
                TodoItemComponent.prototype.delete = function (todox) {
                    this.deleteEmitter.emit(todox);
                };
                TodoItemComponent.prototype.update = function (todo) {
                    this.updateEmitter.emit(todo);
                };
                TodoItemComponent.prototype.submit = function (todo) {
                    this.update(todo);
                    this.toggleEditState();
                };
                TodoItemComponent.prototype.toggleEditState = function () {
                    this.editing = !this.editing;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TodoItemComponent.prototype, "todo", void 0);
                __decorate([
                    core_1.Output('delete'), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TodoItemComponent.prototype, "deleteEmitter", void 0);
                __decorate([
                    core_1.Output('update'), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TodoItemComponent.prototype, "updateEmitter", void 0);
                TodoItemComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-item'
                    }),
                    core_1.View({
                        directives: [common_1.NgIf],
                        pipes: [truncate_pipe_1.TruncatePipe],
                        template: "\n\t\t<div class=\"row todo-item\" [ngClass]=\"{ completed: todo.completed }\">\n\t\t\t<div class=\"col-xs-1\">\n\t\t\t\t<input type=\"checkbox\" class=\"todo-item-select\" [(ngModel)]=\"todo.completed\" (click)=\"update(todo)\">\n\t\t\t</div>\n\n\t\t\t<div class=\"col-xs-8\">\n\t\t\t\t<span class=\"todo-item-text\" *ngIf=\"!editing\" (click)=\"toggleEditState()\">\n\t\t\t\t\t{{ todo.title | truncate:30:'...' }}\n\t\t\t\t</span>\n\n\t\t\t\t<form *ngIf=\"editing\" (ngSubmit)=\"submit(todo)\">\n\t\t\t\t\t<input type=\"text\" class=\"todo-item-input\" [(ngModel)]=\"todo.title\">\n\t\t\t\t</form>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-xs-3\">\n\t\t\t\t<button class=\"todo-item-delete\" (click)=\"delete(todo)\">Delete</button>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoItemComponent);
                return TodoItemComponent;
            })();
            exports_1("TodoItemComponent", TodoItemComponent);
        }
    }
});

//# sourceMappingURL=todo-item.component.js.map
