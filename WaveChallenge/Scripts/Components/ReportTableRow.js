System.register(["@angular/core", "../Services/WaveService"], function (exports_1, context_1) {
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
    var core_1, WaveService_1, ReportTableRow;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (WaveService_1_1) {
                WaveService_1 = WaveService_1_1;
            }
        ],
        execute: function () {
            ReportTableRow = class ReportTableRow {
                constructor(service) {
                    this.service = service;
                }
                ngOnInit() {
                }
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], ReportTableRow.prototype, "data", void 0);
            ReportTableRow = __decorate([
                core_1.Component({
                    selector: "ReportTableRow",
                    templateUrl: "StaticViews/ReportTableRow.html",
                    styleUrls: ["Styles/ReportTableRow.css"]
                }),
                __metadata("design:paramtypes", [WaveService_1.WaveService])
            ], ReportTableRow);
            exports_1("ReportTableRow", ReportTableRow);
        }
    };
});
