import {Component, Input, Output, EventEmitter} from "@angular/core";
import { MockDataLoadService } from '../services/mock-data-load.service';

@Component({
    selector : 'company-dashboard',
    templateUrl : 'app/views/company-dashboard.html',
    styleUrls : ['app/styles/styles.css']
})
export class CompanyDashboard {
    companyList : any[];
    constructor(private _mockDataService : MockDataLoadService) {

    }
    ngOnInit() {
        this.companyList = this._mockDataService.getAllCompanies();
        if (!this.companyList || !this.companyList.length) 
           this._mockDataService.getListOfCompanies().subscribe(data => {
               this.companyList = data;
           }) 
    }
}