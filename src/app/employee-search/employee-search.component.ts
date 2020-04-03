import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service"


@Component({
  selector: 'employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent implements OnInit {

  // makes initial list object
  selectedUsers : any[] = [];

  // sets up constuctor
  constructor(private employeeService : EmployeeService) { }

  // search user event
  searchUser(event)
  {
    this.selectedUsers = this.selectedUsers.filter(
      (item)=>{
      return event.target.value === item.username;
    })
  } 

  ngOnInit(): void 
  {
    // sets up selected user object using the service
    this.selectedUsers = this.employeeService.getEmployeeList();
    this.employeeService.employeeSet.subscribe((data)=>
    {
      console.log(this.selectedUsers);
    })
  }

  // returns even vs. odd
  getClasses(index)
  {
    return { active : false, even : index % 2 !== 0, odd : index % 2 === 0}
  }
  
}
