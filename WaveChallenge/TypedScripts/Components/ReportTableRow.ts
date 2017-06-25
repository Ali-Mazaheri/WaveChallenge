import { Component, OnInit, Input } from '@angular/core';
import { WaveService } from '../Services/WaveService';

@Component({
    selector: "ReportTableRow",
    templateUrl: "StaticViews/ReportTableRow.html",
    styleUrls: ["Styles/ReportTableRow.css"]
})
export class ReportTableRow implements OnInit {


    constructor(private service: WaveService) { }
    @Input() data;
    ngOnInit(): void {
       
    }

  
}