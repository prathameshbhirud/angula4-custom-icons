import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alpha'
})
export class AlphaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
