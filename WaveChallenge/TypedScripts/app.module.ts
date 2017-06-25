import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from "@angular/http";

import { WaveService } from './Services/WaveService';

import { MainComponent } from './Components/MainComponent';
import { FileUploader } from './Components/FileUploader';
import { ReportTable } from './Components/ReportTable';
import { ReportTableRow } from './Components/ReportTableRow';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [MainComponent, FileUploader, ReportTable, ReportTableRow],
    bootstrap: [MainComponent],
    providers: [WaveService]
})
export class AppModule { }