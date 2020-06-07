import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSecure',
})
export class TextSecurePipe implements PipeTransform {
  transform(value: string, mostrar: boolean): string {
    var secure = '';
    if (mostrar) {
      secure = value;
    } else {
      for (let x of value) {
        secure += '*';
      }
    }

    return secure;
  }
}
