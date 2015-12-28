System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent() {
                }
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: 'about'
                    }),
                    core_1.View({
                        template: "\n   <h2>Angular 2 - Seed Project</h2>\n   <p>Light-weight and easy to use seed project for Angular 2 apps.</p>\n   <p>\n     <a href=\"https://travis-ci.org/ghpabs/angular2-seed-project\"><img src=\"https://travis-ci.org/ghpabs/angular2-seed-project.svg?branch=master\" alt=\"Build Status\"></a>\n     <a href=\"https://gitter.im/ghpabs/angular2-seed-project\"><img src=\"https://badges.gitter.im/Join%20Chat.svg\" alt=\"Join the chat at https://gitter.im/ghpabs/angular2-seed-project\"></a>\n   </p>\n   <p><img src=\"images/angular2-seed-logo.png\" width=\"250px\"></p>\n   <br>\n\n   <h3>Stack</h3>\n   <ul>\n     <li><a href=\"http://gulpjs.com/\">Gulp 4</a></li>\n     <li><a href=\"https://angular.io/\">Angular 2</a></li>\n     <li><a href=\"http://www.typescriptlang.org/\">TypeScript</a></li>\n     <li><a href=\"http://sass-lang.com/\">Sass</a></li>\n     <li><a href=\"http://karma-runner.github.io/\">Karma</a></li>\n     <li><a href=\"http://www.protractortest.org/\">Protractor</a></li>\n   </ul>\n   <br>\n\n   <h3>Workflow Features</h3>\n   <ul class=\"list-unstyled\">\n     <li><strong>Gulp</strong> fully automated workflow.</li>\n     <li><strong>Development</strong> and <strong>production</strong>.</li>\n     <li><strong>Unit</strong> and <strong>E2E</strong> test samples.</li>\n     <li><strong>Code coverage</strong> report with TypeScript mapping.</li>\n     <li><strong>TypeScript</strong> linting, sourcemaps and transpilation (ES5).</li>\n     <li><strong>Sass</strong> linting, sourcemaps and transpilation.</li>\n     <li><strong>TypeDoc</strong> documentation generator.</li>\n   </ul>\n   <br>\n\n   <h3>Angular 2 Features</h3>\n   <ul class=\"list-unstyled\">\n     <li>Directives</li>\n     <li>Pipes</li>\n     <li>Services</li>\n     <li>Router</li>\n     <li>REST API</li>\n     <li>Template Cache</li>\n     <li>Modular Components</li>\n     <li>Dependency Injection</li>\n     <li>Custom Events</li>\n   </ul>\n   <br>\n\n   <a class=\"btn btn-info-outline\" href=\"https://github.com/ghpabs/angular2-seed\">GitHub</a>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutComponent);
                return AboutComponent;
            })();
            exports_1("AboutComponent", AboutComponent);
        }
    }
});

//# sourceMappingURL=about.component.js.map
