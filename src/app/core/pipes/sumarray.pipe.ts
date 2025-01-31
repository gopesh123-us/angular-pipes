import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumarray',
})
export class SumarrayPipe implements PipeTransform {
  transform(arr: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
}
