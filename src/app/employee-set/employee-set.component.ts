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
      console.log("data is list component - ", data)
      this.employees = data;
    })

  }

  showInformation(employee)
    {
      alert(`Email : ${employee.email} Phone : ${employee.phone} `)
    }

    getClasses(index)
      {
        return { active : false, odd : index % 2 === 0, even : index % 2 !== 0}
      }

}
