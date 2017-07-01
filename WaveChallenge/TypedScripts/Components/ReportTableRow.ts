import { Component, Input } from '@angular/core';

@Component({
    selector: "ReportTableRow",
    templateUrl: "StaticViews/ReportTableRow.html",
    styleUrls: ["Styles/ReportTableRow.css"]
})
export class ReportTableRow {
    @Input() data;
}