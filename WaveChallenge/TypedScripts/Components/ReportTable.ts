import { Component, OnInit } from '@angular/core';
import { WaveService } from '../Services/WaveService';

@Component({
    selector: "ReportTable",
    templateUrl: "StaticViews/ReportTable.html",
    styleUrls: ["Styles/ReportTable.css"]
})
export class ReportTable implements OnInit {

    rows = [];
       
    constructor(private service: WaveService) { }

    ngOnInit(): void {
       
    }

    populateData(data) {
        this.rows = data;
    }
}