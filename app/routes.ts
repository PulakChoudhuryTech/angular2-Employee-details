import { EMSHome } from './components/ems-home.component'
import { EmployeeDashboard } from './components/employee-dashboard-component';
import { CompanyDashboard } from './components/company-dashboard.component';
import { Employee } from './components/employee.component';
import { Company } from './components/company.comonent';
import { RouterModule, Routes } from '@angular/router';

export const APP_ROUTES : Routes = [
    {
        path : '',
        component : EmployeeDashboard
    },
    {
        path : 'employee',
        component : Employee
    },
    {
        path : 'company',
        component : Company
    },
    {
        path : 'companydashboard',
        component : CompanyDashboard
    },
    {
        path : 'employeedashboard',
        component : EmployeeDashboard
    }
]

export const ROUTER_MODULE = RouterModule.forRoot(APP_ROUTES);

