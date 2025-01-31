import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[]): number[] {
    let output: number[] = [];
    for (let i = 0; i < value.length; i++) {
      if (typeof value[i] == 'number') {
        output.push(value[i]);
      }
    }
    return output;
  }
}
