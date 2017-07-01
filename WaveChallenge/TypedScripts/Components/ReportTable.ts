import { Component } from '@angular/core';

@Component({
    selector: "ReportTable",
    templateUrl: "StaticViews/ReportTable.html",
    styleUrls: ["Styles/ReportTable.css"]
})
export class ReportTable {
    rows = [];
    populateData(data) {
        this.rows = data;
    }
}