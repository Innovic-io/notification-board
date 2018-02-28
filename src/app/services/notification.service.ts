import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { NOTIFICATIONS } from './mock-notifications';
import { INotification } from './notification.interface';

export interface IP {
  origin: string;
}

@Injectable()
export class NotificationService {

  configUrl = 'https://httpbin.org/ip';

  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getNotifications(): Observable<INotification[]> {
    return of(NOTIFICATIONS);
  }

  getNotification(id) {

    const [ notification ] = NOTIFICATIONS.filter((item) => item.title === id);

    return of(notification);
  }

  getIpAddress() {
    return this.http.get<IP>(this.configUrl);
  }

  transformDate(date): any {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
}
