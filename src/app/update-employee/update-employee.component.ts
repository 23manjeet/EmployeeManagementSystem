import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  id: number = null;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      console.log("inside ngOnInit");
      console.log(this.employee);
    }, error => console.log(error));
  }

  onSubmit() {
    this.employeeService.createEmployee(this.employee).subscribe(success => {
      console.log("data updated successfully");
      console.log(success);
      this.router.navigate(["/"]);
    },
      error => {
        console.log(error);
      }
    )
  }

}
