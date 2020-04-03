import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service"

@Component({
  selector: 'employee-set',
  templateUrl: './employee-set.component.html',
  styleUrls: ['./employee-set.component.scss']
})
export class EmployeeSetComponent implements OnInit {

  employees : any[] = [];

  // note lower case
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployeeList();
    this.employeeService.employeeSet.subscribe((data)=>{
      console.log(data)
      this.employees = data;
    })

  }

    getClasses(index){
        return { active : false, even : index % 2 !== 0, odd : index % 2 === 0}
      }

}
