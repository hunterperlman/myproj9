// Routing file for connecting pages

// package imports
import { Routes } from "@angular/router";

// component imports
import { EmployeeAddComponent } from "./app/employee-add/employee-add.component";
import { EmployeeSetComponent } from "./app/employee-set/employee-set.component";
import { EmployeeSearchComponent } from './app/employee-search/employee-search.component';

// maintains the routs on the web page
export const routes : Routes = [
    { path : "home", component : EmployeeAddComponent },
    { path : "employee-set", component : EmployeeSetComponent },
    { path : "employee-search", component : EmployeeSearchComponent },
    { path : "", redirectTo : '/home', pathMatch : 'full'}
    
]

 