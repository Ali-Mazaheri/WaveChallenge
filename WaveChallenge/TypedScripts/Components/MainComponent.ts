import { Component, ViewChild } from '@angular/core';
import { ReportTable } from './ReportTable';

@Component({
    selector: 'MainComponent',
    templateUrl: "/StaticViews/MainComponent.html",
})
export class MainComponent  {
    @ViewChild(ReportTable) child: ReportTable;
    populateData(data) {
        this.child.populateData(data);
    }
}