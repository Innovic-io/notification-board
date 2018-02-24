import {Injectable} from '@angular/core';
import {NOTIFICATIONS} from './mock-notifications';
import {Notification} from './notification';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class NotificationService {

  constructor() {
  }

  getNotifications(): Observable<Notification[]> {
    return of(NOTIFICATIONS);
  }
}
