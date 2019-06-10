import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../services/services/employees.service';
import { employee } from './model/employee.1';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeList: Array<employee>;
  isCollapsed = true;
  constructor(private employeesServices: EmployeesService) { }

  ngOnInit() {
    this.getEmployee();
  }
  getEmployee() {
    this.employeeList = this.employeesServices.getEmployee();
    // console.log(this.employeeList);
  }
  onDelete(id) {
    this.employeesServices.delete(id);
  }
  toggleCollapse(name) {
    this.isCollapsed = !this.isCollapsed;
  }
}
