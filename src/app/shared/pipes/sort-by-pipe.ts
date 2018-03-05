import { Pipe, PipeTransform } from '@angular/core';
import { INotification } from '../../services/notification.interface';

@Pipe({
  name: 'sort'
})

export class SortByPipe implements PipeTransform {

  transform(array: INotification[], args: any): INotification[] {
    if (!array) {
      return null;
    }

    array.sort((a: any, b: any) => {
      if (array.length === 0) {
        return 0;
      }
      if (a.published > b.published) {
        return -1;
      } else if (a.published < b.published) {
        return 1;
      } else {
        return 0;
      }
    });

    return array;
  }
}
