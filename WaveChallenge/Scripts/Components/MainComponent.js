System.register(["@angular/core", "./ReportTable"], function (exports_1, context_1) {
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
    var core_1, ReportTable_1, MainComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ReportTable_1_1) {
                ReportTable_1 = ReportTable_1_1;
            }
        ],
        execute: function () {
            MainComponent = class MainComponent {
                populateData(data) {
                    this.child.populateData(data);
                }
            };
            __decorate([
                core_1.ViewChild(ReportTable_1.ReportTable),
                __metadata("design:type", ReportTable_1.ReportTable)
            ], MainComponent.prototype, "child", void 0);
            MainComponent = __decorate([
                core_1.Component({
                    selector: 'MainComponent',
                    templateUrl: "/StaticViews/MainComponent.html",
                })
            ], MainComponent);
            exports_1("MainComponent", MainComponent);
        }
    };
});
