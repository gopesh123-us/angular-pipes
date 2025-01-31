import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    let result = '';
    for (let i = 0; i < value.length; i++) {
      let s = value.charAt(i).toUpperCase();
      result = result + s;
    }
    return result;
  }
}
