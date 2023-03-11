import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConvertor'
})
export class TempConvertorPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: number, unit: string) {
    if(value && !isNaN(value)) {
        if (unit === 'C') {
            var temperature = (value - 32) /1.8 ;
            return temperature.toFixed(2);
        } else if (unit === 'F'){
            var temperature = (value * 1.8 ) + 32
            return temperature.toFixed(2);
        }
    }
    return;

}
}