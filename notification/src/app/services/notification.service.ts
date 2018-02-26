import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { NOTIFICATIONS } from './mock-notifications';
import { INotification } from './notification.interface';

@Injectable()
export class NotificationService {

  getNotifications(): Observable<INotification[]> {
    return of(NOTIFICATIONS);
  }
}
