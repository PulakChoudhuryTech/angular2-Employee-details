import {Component, Input, Output, EventEmitter} from "@angular/core";
import {SideMenuListService} from '../services/side-menu-list.services'
import {SideMenuList} from '../interfaces/side-menu-list.interface'

@Component({
    selector : 'ems-side-nav',
    templateUrl : 'app/views/ems-side-nav.html',
    styleUrls : ['app/styles/styles.css'],
    inputs : ['header', 'fontColor'],
    outputs: ['sideMenuChange'],
    providers : [SideMenuListService]
})
export class EMSSideNav {
    public contentList : SideMenuList[]
    sideMenuChange = new EventEmitter<string>();
    constructor(private _sideMenuListService: SideMenuListService) {
       this.contentList =  _sideMenuListService.getSideMenuList()
    }

    onChange(value: string) {
        this.sideMenuChange.emit(value);
    }
}