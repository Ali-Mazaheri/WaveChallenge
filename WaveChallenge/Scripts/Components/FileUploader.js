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
    var core_1, WaveService_1, FileUploader;
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
            FileUploader = class FileUploader {
                constructor(service) {
                    this.service = service;
                    this.populate = new core_1.EventEmitter();
                    this.reports = [];
                    this.selectedFileName = 'Please select a CSV file';
                    this.selectedFile = null;
                }
                ngOnInit() {
                    this.service.getReportsIds().then((json) => {
                        var result = json.json();
                        if (result.data && result.message == "Success") {
                            this.reports = result.data;
                        }
                        else {
                            alert(result.message);
                        }
                    });
                }
                selectedFileChanged(target) {
                    this.selectedFile = target.files[0];
                    this.selectedFileName = this.selectedFile.name;
                }
                upload() {
                    if (!this.selectedFile || !this.selectedFile.name) {
                        alert("Please Select a CSV File");
                        return;
                    }
                    var formData = new FormData();
                    formData.append(this.selectedFile.name, this.selectedFile);
                    this.service.uploadFile(formData).then((json) => {
                        var result = json.json();
                        if (result.data && result.message == "Success") {
                            this.reports.push(result.data);
                        }
                        else {
                            alert(result.message);
                        }
                    });
                }
                populateReport(reportId) {
                    this.service.getReport(reportId).then((json) => {
                        var result = json.json();
                        if (result.data && result.message == "Success") {
                            this.populate.emit(result.data);
                        }
                    });
                }
            };
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], FileUploader.prototype, "populate", void 0);
            FileUploader = __decorate([
                core_1.Component({
                    selector: "FileUploader",
                    templateUrl: "StaticViews/FileUploader.html",
                    styleUrls: ["Styles/FileUploader.css"]
                }),
                __metadata("design:paramtypes", [WaveService_1.WaveService])
            ], FileUploader);
            exports_1("FileUploader", FileUploader);
        }
    };
});
