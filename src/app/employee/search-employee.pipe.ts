import { Pipe, PipeTransform } from '@angular/core';
import { employee } from './model/employee.1';
@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {

  transform(value: Array<employee>, args?: string): any {
    if (!args) {
      return value;
    }
    args = args.toLowerCase();
    // tslint:disable-next-line:no-shadowed-variable
    return value.filter(employee => {
      return employee.name.toLowerCase().includes(args);
    });
  }

}
