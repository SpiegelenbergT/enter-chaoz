System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', './todo/todo.component', './about/about.component'], function(exports_1) {
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
    var browser_1, core_1, router_1, todo_component_1, about_component_1;
    var AppComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Angular 2 Seed';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app'
                    }),
                    core_1.View({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n\t\t<div>\n\t\t\t<ul class=\"nav nav-pills\">\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['Todo']\">Todo</a></li>\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['About']\">About</a></li>\n\t\t\t</ul>\n\t\t\t<hr>\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t"
                    }),
                    router_1.RouteConfig([
                        { path: '/todo', name: 'Todo', component: todo_component_1.TodoComponent, useAsDefault: true },
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            browser_1.bootstrap(AppComponent, [
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});

//# sourceMappingURL=app.js.map
