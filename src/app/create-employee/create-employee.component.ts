import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private empService:EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.empService.createEmployee(this.employee).subscribe(success=>{
      console.log(success);
      this.goToEmployeeList();
    },
    error => {
      console.log(error);
    }
    );
  }

  goToEmployeeList(){
    this.router.navigate(['/']);
  }


  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
}
