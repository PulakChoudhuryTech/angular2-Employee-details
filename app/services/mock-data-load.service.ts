import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MockDataLoadService {
    allCompanies: Object = {};
    allCompanyList : any[] = [];
    
    constructor(private http : Http) {
        
    }
    private createCompanyMap(companies:any) {
        var that = this;
        this.allCompanyList = companies;
        _.each(companies, function(company: any) {
            that.allCompanies[company.name] = company;
        });
    }
    getEmpIdByCompanyName(name: string) {
        var selectedCompany = this.getCompanyByName(name);
        selectedCompany.currentEmpId = selectedCompany.currentEmpId + 1
        this.updateCompany(selectedCompany);
        return selectedCompany.currentEmpId;
    }

    isCompanyExist(name:string) {
        return this.allCompanies[name] ? true : false
    }
    
    updateCompany(company:any) {
        var companies = this.getAllCompanies();
        _.where(companies, {name : company.name})[0] = company;
        localStorage.setItem('companies', JSON.stringify(companies));
        this.createCompanyMap(companies);
    }

    getListOfCompanies() {
        var that = this;
        return this.http.get('../app/mocks/companies.json').map((res: Response) => {
            that.createCompanyMap(res.json());
            return res.json();
        });
    }

    getCompanyByName(name:string) {
        return this.allCompanies[name];
    }

    getAllCompanies() {
        return this.allCompanyList;
    }

    addCompanies(companies:any) {
        localStorage.setItem('companies', JSON.stringify(companies));
        this.createCompanyMap(companies);
    }

    getAllEmployees() {
        return JSON.parse(localStorage.getItem('employees'));
    }
    
    addEmployee(employees:any) {
        localStorage.setItem('employees', JSON.stringify(employees));
    }
}