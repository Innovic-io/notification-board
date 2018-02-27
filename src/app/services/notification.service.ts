import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { DatePipe } from '@angular/common';

import { NOTIFICATIONS } from './mock-notifications';
import { INotification } from './notification.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotificationService {

  configUrl = 'https://httpbin.org/ip';


  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getNotifications(): Observable<INotification[]> {
    return of(NOTIFICATIONS);
  }

  getIpAddress() {
    return this.http
      .get(this.configUrl);
  }

  transformDate(date): any {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
}
