import {Injectable} from '@angular/core';
import {NOTIFICATIONS} from './mock-notifications';
import {Notification} from './notification';

@Injectable()
export class NotificationService {

  constructor() {
  }

  getNotifications(): Notification[] {
    return NOTIFICATIONS;
  }
}
