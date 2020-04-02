import { Routes } from "@angular/router";

import { EmployeeAddComponent } from "./app/employee-add/employee-add.component";
import { EmployeeSetComponent } from "./app/employee-set/employee-set.component";

export const routes : Routes = [
    { path : "home", component : EmployeeAddComponent },
    { path : "employee-set", component : EmployeeSetComponent },
    { path : "", redirectTo : '/home', pathMatch : 'full'}
]

 