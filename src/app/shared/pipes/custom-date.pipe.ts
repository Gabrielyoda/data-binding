import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as country from 'dayjs/locale/id';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any): unknown {
    let date = dayjs(value, 'DD MMMM YYYY').locale(country);
    return `${date.locale('id').format('dddd, DD MMMM YYYY')} `;
  }

}
