import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';

import {NOTIFICATIONS} from './mock-notifications';
import {INotification} from './notification.interface';
import {environment} from '../../environments/environment.staging';

export interface IP {
  origin: string;
}

@Injectable()
export class NotificationService {


  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getNotifications(): Observable<INotification[]> {
    return of(NOTIFICATIONS);
  }

  postNotification(data, currentDate): void {
    NOTIFICATIONS.push(
      {
        author: data['author'],
        title: data['title'],
        text: data['text'],
        published: currentDate,
        url: data['url']
      }
    );
  }

  getNotification(id) {

    const [notification] = NOTIFICATIONS.filter((item) => item.title === id);

    return of(notification);
  }

  getIpAddress() {
    return this.http.get<IP>(environment.url + '/ip');
  }

  transformDate(date): any {
    return this.datePipe.transform(date, 'short');
  }
}
