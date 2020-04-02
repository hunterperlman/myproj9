import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service"

@Component({
  selector: 'employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  user: { username: string, email: string, phone: string } = {
    username: "",
    email: "",
    phone: ""
  }
  //note the lower case
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  addUser() {
    this.employeeService.addEmployeeData(this.user);
  }

}
