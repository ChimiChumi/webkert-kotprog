import { Pipe, PipeTransform } from '@angular/core';
import { startWith } from 'rxjs';

@Pipe({
  name: 'mobileFormat'
})
export class MobileFormatPipe implements PipeTransform {
  transform(value: string): string {

    if(value && startWith('0')){

      if (value && value.length === 10) {
        return value.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
      }

      if (value && value.length === 11) {
        return value.replace(/(\d{2})(\d{2})(\d{3})(\d{4})/, '$1 $2 $3 $4');
      }
    }

    if (value && startWith('+')) {
      if (value && value.length === 12) {
        return value.replace(/^(\+\d{2})(\d{2})(\d{3})(\d{3})/, '($1) $2 $3 $4');
      }

      if (value && value.length === 13) {
        return value.replace(/^(\+\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/, '($1) $2 $3 $4 $5');
      }
    }

    return value;
  }
}