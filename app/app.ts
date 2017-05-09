import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import { BootstrapGridModule } from 'ng2-bootstrap-grid';
import { EMSSideNav } from './components/ems-side-nav.component';
import { EMSHome } from './components/ems-home.component';
import { ROUTER_MODULE } from './routes';
import { Employee } from './components/employee.component';
import { Company } from './components/company.comonent';
import { CompanyDashboard } from './components/company-dashboard.component';
import { EmployeeDashboard } from './components/employee-dashboard-component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { LocalStorageService } from 'angular-2-local-storage';
import { MockDataLoadService } from './services/mock-data-load.service';

@NgModule({
    declarations: [ 
                    EMSHome, 
                    EMSSideNav, 
                    Employee, 
                    Company, 
                    EmployeeDashboard, 
                    CompanyDashboard
                ],
    imports: [BrowserModule, ROUTER_MODULE, FormsModule, HttpModule],
    bootstrap: [EMSHome],
    providers: [MockDataLoadService]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);


