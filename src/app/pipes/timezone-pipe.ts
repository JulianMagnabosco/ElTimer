import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timezone'
})
export class TimezonePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.replace(/_/g, ' ').replace(/\//g, ', ');
  }

}
