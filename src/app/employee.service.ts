import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs" 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService 
{

  employeeSet = new Subject<any>();

  private list : any[] = [];

  constructor() { }

  getEmployeeList()
    {
      return this.list;
    }

  addEmployeeData(user)
    {
      this.list.push({...user})
      this.employeeSet.next(this.list)
      console.log(this.list);
    }

  getEmployeeByName(name)
      {
        return this.list.filter((employee)=>{
          return employee.username === name
        })[0]
      }
}
