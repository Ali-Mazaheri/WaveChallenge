import { Injectable, Inject } from "@angular/core";
import { Http, RequestOptionsArgs } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class WaveService {

    constructor(private http: Http) { }
    public getReportsIds(): Promise<any> {
        return this.fetchData("Wave/GetReportsIds", "GET", null);
    }

    public uploadFile(formData: FormData): Promise<any> {
        return this.fetchData("Wave/UploadFiles", "POST", formData);
    }

    public getReport(ReportId: number): Promise<any> {
        return this.fetchData(`Wave/GetReport?ReportId=${ReportId}`, "GET", null);
    }

    private fetchData(url: string, method: string, data: any): Promise<any> {

        var opt: RequestOptionsArgs = {};
        opt.body = data;
        opt.method = method;
        opt.url = "http://localhost:27527/" + url;

        return this.http.request(url, opt).map(x => x).toPromise();
    }
}