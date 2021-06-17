import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: String): unknown {
    return value[0].toUpperCase() + value.substr(1).toLowerCase();
  }

}
