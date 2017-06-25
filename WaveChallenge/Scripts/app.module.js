System.register(["@angular/core", "@angular/platform-browser", "@angular/http", "./Services/WaveService", "./Components/MainComponent", "./Components/FileUploader", "./Components/ReportTable", "./Components/ReportTableRow"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, http_1, WaveService_1, MainComponent_1, FileUploader_1, ReportTable_1, ReportTableRow_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (WaveService_1_1) {
                WaveService_1 = WaveService_1_1;
            },
            function (MainComponent_1_1) {
                MainComponent_1 = MainComponent_1_1;
            },
            function (FileUploader_1_1) {
                FileUploader_1 = FileUploader_1_1;
            },
            function (ReportTable_1_1) {
                ReportTable_1 = ReportTable_1_1;
            },
            function (ReportTableRow_1_1) {
                ReportTableRow_1 = ReportTableRow_1_1;
            }
        ],
        execute: function () {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
                    declarations: [MainComponent_1.MainComponent, FileUploader_1.FileUploader, ReportTable_1.ReportTable, ReportTableRow_1.ReportTableRow],
                    bootstrap: [MainComponent_1.MainComponent],
                    providers: [WaveService_1.WaveService]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
