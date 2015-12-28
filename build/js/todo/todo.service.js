System.register(['rxjs/add/operator/map', 'angular2/core', '../shared/services/rest.service'], function(exports_1) {
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
    var core_1, rest_service_1;
    var TodoService;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rest_service_1_1) {
                rest_service_1 = rest_service_1_1;
            }],
        execute: function() {
            TodoService = (function () {
                function TodoService(rest) {
                    this.rest = rest;
                    this.todos = [];
                }
                TodoService.prototype.fetch = function () {
                    var _this = this;
                    this.rest.read('/todos', { userId: 1 })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (todos) { return _this.todos = todos; });
                };
                TodoService.prototype.create = function (todo) {
                    this.todos.unshift(todo);
                    this.rest.create('/todos', todo)
                        .subscribe(function () { return console.log('created!'); });
                };
                TodoService.prototype.update = function (todo) {
                    this.rest.update("/todos/" + todo.id, todo)
                        .subscribe(function () { return console.log('updated!'); });
                };
                TodoService.prototype.delete = function (todo) {
                    this.todos.splice(this.todos.indexOf(todo), 1);
                    this.rest.delete("/todos/" + todo.id)
                        .subscribe(function () { return console.log('deleted!'); });
                };
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [rest_service_1.RestService])
                ], TodoService);
                return TodoService;
            })();
            exports_1("TodoService", TodoService);
        }
    }
});

//# sourceMappingURL=todo.service.js.map
