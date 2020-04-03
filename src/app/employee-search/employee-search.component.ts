import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent implements OnInit {

  @Input("list") list : any [];
  selectedUsers : any[] = [];

  constructor(){}
  ngOnInit(): void {
    //this.selectedUsers = employeeService.getEmployeeList();
  }

  
  
  

  searchUser(event)
  {
    this.selectedUsers = this.list.filter(
      (item)=>{
      return event.target.value === item.username;
    })
  }
}


  /*
  constructor(private employeeService : EmployeeService) { }
  ngOnInit(): void {

    this.selectedUsers = this.employeeService.getEmployeeList();

    this.employeeService.employeeSet.subscribe((data)=>{
      console.log("data is list component - ", data)
      this.selectedUsers = data;
    })
  showInformation(employee)
    {
      alert(`Email : ${employee.email} Phone : ${employee.phone} `)
    }

    getClasses(index)
      {
        return { active : false, odd : index % 2 === 0, even : index % 2 !== 0}
      }
  }
  */