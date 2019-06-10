import { Injectable } from '@angular/core';
import { employee } from 'src/app/employee/model/employee.1';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
// this is the default array of employees that will show on load
employee: Array<employee> = [
  {id: 1,
  name: 'Amandla',
  lastname: 'Stenberg',
  // tslint:disable-next-line:max-line-length
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Blandit aliquam etiam erat velit. Nibh cras pulvinar mattis nunc sed blandit libero. Purus faucibus ornare suspendisse sed nisi. Nunc sed augue lacus viverra vitae congue. Velit laoreet id donec ultrices tincidunt arcu non. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. A lacus vestibulum sed arcu non odio. Sit amet cursus sit amet dictum sit. Erat imperdiet sed euismod nisi porta lorem mollis.',
  image: './assets/amandla2.jpg',
  contacts: '000888444888',
  address: 'Lorem ipsum street 17827',
  instagram: 'Lorem/ipsum/aru/cd'}
];
  constructor() { }
  getEmployee(): Array<employee> {
    return this.employee;
  }
  addEmployee(v: any) {
    this.employee.push(v);
  }
  delete(id: any): any {
    // tslint:disable-next-line:no-shadowed-variable
    this.employee.map((employee, index) => {
      if (employee.id === id) {
        this.employee.splice(index, 1);
      }
    });
  }
  getEmployeeId(id: any) {
    let tempEmployee: employee;
    this.employee.map(a => {
      // tslint:disable-next-line:triple-equals
      if (a.id == id) {
        tempEmployee = a;
      }
    });
    return tempEmployee;
  }
  // tslint:disable-next-line:no-shadowed-variable
  updateEmployee(employee: employee) {
    this.employee.map((a, index) => {
      if (a.id === employee.id) {
        a.id = employee.id;
        a.name = employee.name;
        a.lastname = employee.lastname;
        a.description = employee.description;
        a.image = employee.image;
        a.contacts = employee.contacts;
        a.address = employee.address;
        a.instagram = employee.instagram;
      }
    });
  }
}
