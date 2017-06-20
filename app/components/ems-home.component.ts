import {Component} from "@angular/core";
import { MockDataLoadService } from '../services/mock-data-load.service';

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
    constructor(private _mockDataLoadService : MockDataLoadService) {

    }
    onSelectColor(color: string) {
        this.fontColor.name = color;
        this._mockDataLoadService.addSelectedColor(this.fontColor);
    }
    ngOnInit() {
        this.fontColor.name = this.colorList[0];
        this._mockDataLoadService.addSelectedColor(this.fontColor);
    }
}


 