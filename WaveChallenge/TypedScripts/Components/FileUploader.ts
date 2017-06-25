import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WaveService } from '../Services/WaveService';

@Component({
    selector: "FileUploader",
    templateUrl: "StaticViews/FileUploader.html",
    styleUrls: ["Styles/FileUploader.css"]
})
export class FileUploader implements OnInit {

    @Output() populate = new EventEmitter();
    reports = [];
    selectedFileName = 'Please select a CSV file';
    selectedFile = null;

    constructor(private service: WaveService) { }

    ngOnInit(): void {
        this.service.getReportsIds().then((json: any) => {
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

        this.service.uploadFile(formData).then((json: any) => {
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
}