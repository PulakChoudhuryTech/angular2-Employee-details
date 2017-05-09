import {Component} from "@angular/core";
import { MockDataLoadService } from '../services/mock-data-load.service';

@Component({
    selector:'company',
    templateUrl:  'app/views/add-company.html',
    styleUrls: ['app/styles/styles.css']
})
export class Company {
    company : any = {};
    companyList : any[] = [];

    constructor(private _mockDataService: MockDataLoadService) {}
   
    private onAddCompany() {
        if (!this._mockDataService.isCompanyExist(this.company.name)) 
            this.companyList.push(this.company);
            this._mockDataService.addCompanies(this.companyList);
            this.clearFields();
        alert("Company already exist")
    }

    private clearFields() {
        this.company = {};
    }

    ngOnInit() {
        this.companyList = this._mockDataService.getAllCompanies();
        if (!this.companyList || !this.companyList.length) 
            this._mockDataService.getListOfCompanies().subscribe(data => {
                this.companyList = data;
            }) 
    }
}

 