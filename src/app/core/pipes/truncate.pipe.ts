import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(str: string, numWords: number): string {
    const words = str.split(' ');
    if (words.length <= numWords) {
      return str;
    }
    return words.slice(0, numWords).join(' ') + '...';
  }
}
