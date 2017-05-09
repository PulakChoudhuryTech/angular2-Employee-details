import { Injectable } from '@angular/core'
import { EMPLOYEE_LIST } from '../services/app-constants';

@Injectable()
export class EmployeeListService {
    getEmployeeList() {
        return EMPLOYEE_LIST
    }
}