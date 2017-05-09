import {Component, Input, Output, EventEmitter} from "@angular/core";
import { EmployeeList } from '../interfaces/employee-list.interface';
import { EmployeeListService } from '../services/employee-list.services'
@Component({
    selector : 'employee-dashboard',
    templateUrl : 'app/views/employee-dashboard.html',
    styleUrls : ['app/styles/styles.css'],
    providers : [EmployeeListService]
})
export class EmployeeDashboard {
    public employeeList : EmployeeList[];
    constructor(private _empList : EmployeeListService ) {
        
    }

    ngOnInit() {
        this.employeeList = JSON.parse(localStorage.getItem('employees'));
    }
}