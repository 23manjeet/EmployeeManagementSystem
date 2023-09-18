import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:8080/employee";
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}/fetch-employee`);
  }

  createEmployee(emp: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/save`, emp);
  }

  getEmployeeById(id: number): Observable<Employee> {
    const params = new HttpParams().set('id', id.toString());
    return this.httpClient.get<Employee>(`${this.baseUrl}/fetch-employee`, { params });
    // return this.httpClient.get<Employee>(`${this.baseUrl}/fetch-employee?id=${id}`);

  }
}
