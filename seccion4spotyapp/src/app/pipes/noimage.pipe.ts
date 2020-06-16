import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
})
export class NoimagePipe implements PipeTransform {
  transform(images: any[]): string {
    if (!images) {
      return 'https://mlksl848y9ir.i.optimole.com/zD_tZlc-i_-5vPtm/w:auto/h:auto/q:auto/https://equitek.com.mx/wp-content/uploads/2018/09/NO-IMAGEN-grandes.jpg';
    }
    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'https://mlksl848y9ir.i.optimole.com/zD_tZlc-i_-5vPtm/w:auto/h:auto/q:auto/https://equitek.com.mx/wp-content/uploads/2018/09/NO-IMAGEN-grandes.jpg';
    }
  }
}
