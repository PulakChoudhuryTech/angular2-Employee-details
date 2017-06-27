import {Component} from "@angular/core";
import { MockDataLoadService } from '../services/mock-data-load.service';
import { SampleService } from '../services/sample-services';

@Component({
    selector:'my-app',
    templateUrl:  'app/views/ems-home.html',
    styleUrls: ['app/styles/styles.css']
})
export class EMSHome {
    logo: String = "logo";
    sideNavHeader: string  = "Contents";
    colorList : string[] = ['#333', "red", "blue", "yellow"];
    fontColor : any = { name : '' };
    sideMenuList : any;
    constructor(private _mockDataLoadService : MockDataLoadService) {

    }
    onSelectColor(color: string) {
        this.fontColor.name = color;
        this._mockDataLoadService.addSelectedColor(this.fontColor);
    }
    ngOnInit() {
        this.fontColor.name = this.colorList[0];
        this.sideMenuList = new SampleService('pulak', 'xyz', 'xtys');
        this._mockDataLoadService.addSelectedColor(this.fontColor);
    }
}