import {Injectable} from '@angular/core'
import {SIDE_MENU_LIST} from '../services/app-constants';

@Injectable()
export class SideMenuListService {
    getSideMenuList() {
        return SIDE_MENU_LIST
    }
}