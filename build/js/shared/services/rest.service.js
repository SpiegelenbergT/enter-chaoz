System.register(['rxjs/add/operator/map', 'angular2/core', 'angular2/http'], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var RestOptions, RestService;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            RestOptions = (function (_super) {
                __extends(RestOptions, _super);
                function RestOptions() {
                    _super.call(this);
                    this.url = '//jsonplaceholder.typicode.com';
                    this.headers.append('Content-Type', 'application/json');
                }
                RestOptions = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RestOptions);
                return RestOptions;
            })(http_1.BaseRequestOptions);
            exports_1("RestOptions", RestOptions);
            RestService = (function () {
                function RestService(http, restOptions) {
                    this.http = http;
                    this.restOptions = restOptions;
                }
                RestService.prototype.create = function (path, body) {
                    return this.request(path, http_1.RequestMethod.Post, body);
                };
                RestService.prototype.read = function (path, search) {
                    return this.request(path, http_1.RequestMethod.Get, null, search);
                };
                RestService.prototype.update = function (path, body) {
                    return this.request(path, http_1.RequestMethod.Put, body);
                };
                RestService.prototype.delete = function (path) {
                    return this.request(path, http_1.RequestMethod.Delete);
                };
                RestService.prototype.request = function (path, method, body, search) {
                    var options = new http_1.RequestOptions(this.restOptions.merge({
                        method: method,
                        url: this.restOptions.url + path,
                        body: JSON.stringify(body),
                        search: this.serialize(search)
                    }));
                    return this.http.request(new http_1.Request(options));
                };
                RestService.prototype.serialize = function (obj) {
                    var str = [];
                    for (var p in obj) {
                        if (obj.hasOwnProperty(p)) {
                            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
                        }
                    }
                    return str.join('&');
                };
                RestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, RestOptions])
                ], RestService);
                return RestService;
            })();
            exports_1("RestService", RestService);
        }
    }
});

//# sourceMappingURL=rest.service.js.map
