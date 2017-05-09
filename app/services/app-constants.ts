import { SideMenuList } from '../interfaces/side-menu-list.interface';
import { EmployeeList } from '../interfaces/employee-list.interface';

export const SIDE_MENU_LIST : SideMenuList[] = [
                                        {
                                            name : 'Employee Dashboard',
                                            icon: 'fa fa-table',
                                            url : '/employeedashboard'
                                        },
                                        {
                                            name : 'Company Dashboard',
                                            icon : 'fa fa-table',
                                            url : '/companydashboard'
                                        },
                                        {
                                            name : 'Employee',
                                            icon : 'fa fa-plus-square',
                                            url : '/employee'
                                        },
                                        {
                                            name : 'Company',
                                            icon : 'fa fa-plus-square',
                                            url : '/company'
                                        }
                                    ];


export const EMPLOYEE_LIST : EmployeeList[] = [
                                        {
                                             name: 'Pulak',
                                             empId : '1082',
                                             company : 'OFS',
                                             email : 'pulakdj89@gmail.com',
                                             contact : '8939263911'
                                        },
                                         {
                                             name: 'Nithin',
                                             empId : '1022',
                                             company : 'OFS',
                                             email : 'nithin@gmail.com',
                                             contact : '999999999'
                                        }
                                    ];