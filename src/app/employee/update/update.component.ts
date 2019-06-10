import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/services/employees.service';
import { employee } from '../model/employee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  selectedID: number;
  employee: employee;

  isCollapsed = true;

  constructor(private activateRouter: ActivatedRoute, private employeeService: EmployeesService,
              private router: Router) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(data => {
      this.selectedID = data.id;
    });
    this.getEmployeeById();
  }
  getEmployeeById() {
    this.employee = this.employeeService.getEmployeeId(this.selectedID);
  }
  onSubmit(v) {
    this.employeeService.updateEmployee(v);
    this.router.navigate(['/']);
  }
}
