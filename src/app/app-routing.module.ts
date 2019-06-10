import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './employee/add/add.component';
import { UpdateComponent } from './employee/update/update.component';
import {LoginComponent} from './employee/login/login.component';
const routes: Routes = [
  {path: '', component: EmployeeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add', component: AddComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: '**', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
