import {Component, Input, Output, EventEmitter} from "@angular/core";
import { MockDataLoadService } from '../services/mock-data-load.service';
import { Router } from '@angular/router';

@Component({
    selector : 'company-dashboard',
    templateUrl : 'app/views/company-dashboard.html',
    styleUrls : ['app/styles/styles.css']
})
export class CompanyDashboard {
    companyList : any[];
    constructor(private _mockDataService : MockDataLoadService, private _routes : Router) {

    }

    onDelete(compnay:any) {
        this.companyList = this._mockDataService.deleteCompany(compnay);
    }
    
    onEdit(compnay:any) {
        this._routes.navigate(['/company', { compName : compnay.name }]);
    }

    ngOnInit() {
        this.companyList = this._mockDataService.getAllCompanies();
        if (!this.companyList || !this.companyList.length) 
           this._mockDataService.getListOfCompanies().subscribe(data => {
               this.companyList = data;
           }) 
    }
}