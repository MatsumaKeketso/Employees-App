import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { SearchEmployeePipe } from './employee/search-employee.pipe';
import { AddComponent } from './employee/add/add.component';
import { UpdateComponent } from './employee/update/update.component';
import { LoginComponent } from './employee/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SearchEmployeePipe,
    AddComponent,
    UpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
