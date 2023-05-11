import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cusPipe'
})
export class CusPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
