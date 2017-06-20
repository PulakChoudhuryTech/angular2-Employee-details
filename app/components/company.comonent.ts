import {Component} from "@angular/core";
import { MockDataLoadService } from '../services/mock-data-load.service';
import { Routes, RouterModule } from '@angular/router';
import { EMSHome } from '../components/ems-home.component';

@Component({
    selector:'company',
    templateUrl:  'app/views/add-company.html',
    styleUrls: ['app/styles/styles.css']
})
export class Company {
    company : any = {};
    companyList : any[] = [];
    fontColor : any;

    constructor(private _mockDataService: MockDataLoadService, private _routeParams: RouterModule) {}
   
    private onAddCompany() {
        if (this._mockDataService.isCompanyExist(this.company.name)) {
            alert("Company already exist");
            return;
        }
        this.companyList.push(this.company);
        this._mockDataService.addCompanies(this.companyList);
        this.clearFields();
    }

    private clearFields() {
        this.company = {};
    }
    ngOnInit() {
        this.fontColor = this._mockDataService.getSelectedFontColor();
        console.log(this._routeParams)
        this.companyList = this._mockDataService.getAllCompanies();
        if (!this.companyList || !this.companyList.length) 
            this._mockDataService.getListOfCompanies().subscribe(data => {
                this.companyList = data;
            }) 
    }
}

 