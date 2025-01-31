import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSumFilter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[]): number {
    let sum = 0;
    let output: number[] = [];
    for (let i = 0; i < value.length; i++) {
      if (typeof value[i] === 'number') {
        output.push(value[i]);
      }
    }

    for (let j = 0; j < output.length; j++) {
      sum = sum + output[j];
    }
    return sum;
  }
}
