import { Component, OnInit } from '@angular/core';
import {EmployeesService} from 'src/app/services/services/employees.service';
import { from } from 'rxjs';
import {Router} from '@angular/router';
import { employee } from '../model/employee'; // if error check here first
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  selectedID: number;
  employee: employee;
  constructor(private router: Router, private employeeService: EmployeesService) { }

  ngOnInit() {}

  onSubmit(v) {
    this.employeeService.addEmployee(v);
    this.router.navigate(['/']);
  }
  getEmployeeById() {
    this.employee = this.employeeService.getEmployeeId(this.selectedID);
  }
}
