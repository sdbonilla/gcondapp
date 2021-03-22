import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'torreDetails'
})
export class TorreDetailsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
