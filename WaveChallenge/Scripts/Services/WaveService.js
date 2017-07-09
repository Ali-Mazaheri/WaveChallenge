System.register(["@angular/core", "@angular/http", "rxjs/add/operator/toPromise", "rxjs/add/operator/map"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, WaveService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (_2) {
            }
        ],
        execute: function () {
            WaveService = class WaveService {
                constructor(http) {
                    this.http = http;
                }
                getReportsIds() {
                    return this.fetchData("Wave/GetReportsIds", "GET", null);
                }
                uploadFile(formData) {
                    return this.fetchData("Wave/UploadFiles", "POST", formData);
                }
                getReport(ReportId) {
                    return this.fetchData(`Wave/GetReport?ReportId=${ReportId}`, "GET", null);
                }
                fetchData(url, method, data) {
                    var opt = {};
                    opt.body = data;
                    opt.method = method;
                    opt.url = "http://192.168.1.137:27527/" + url;
                    return this.http.request(url, opt).map(x => x).toPromise();
                }
            };
            WaveService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], WaveService);
            exports_1("WaveService", WaveService);
        }
    };
});
