import {Component} from "@angular/core";
import { EmployeeList } from '../interfaces/employee-list.interface';
import { MockDataLoadService } from '../services/mock-data-load.service';

@Component({
    selector:'employee',
    templateUrl:  'app/views/add-employee.html',
    styleUrls: ['app/styles/styles.css']
})
export class Employee {
    employee : any = {};
    employeeList : EmployeeList[];
    companies : any;

    constructor(private _mockDataService: MockDataLoadService) {}
   
    private onAddEmployee() {
        this.employee.empId = this._mockDataService.getEmpIdByCompanyName(this.employee.company);
        this.employeeList.push(this.employee);
        this._mockDataService.addEmployee(this.employeeList);
        this.clearFields();
    }

    private onSelectCompany(company: string) {
        this.employee.company = company;
    }

    private clearFields() {
        this.employee = {};
    }

    ngOnInit() {
        var empList = this._mockDataService.getAllEmployees();
        this.employeeList = empList ? empList : [];
        //checks if data available in local storage else fetch mock data
        var allCompanies = this._mockDataService.getAllCompanies();
        this.companies = allCompanies;
        if (!this.companies || !this.companies.length) 
            this._mockDataService.getListOfCompanies().subscribe(data => {
                this.companies = data;
            }) 
    }
}

 