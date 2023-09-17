import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // const employee1 = new Employee(1, 'John', 'john@abc.com', 25);
    // const employee2 = new Employee(2, 'Jane Smith', 'smith@abc.com', 28);

    // this.employees.push(employee1, employee2);
    this.getEmployees();
    console.log(this.employees);
  }

  private getEmployees() {
    console.log("Inside getEmployees method")
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    })
  }

}
