import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/filter';

import { environment } from '../../environments/environment.staging';
import { api } from '../../environments/environment.api';
import { IJSONResponse } from './jsonResponse.interface';
import { Subject } from 'rxjs/Subject';
import { INotification } from './notification.interface';

export interface IP {
  origin: string;
}

@Injectable()
export class NotificationService {

  subjectTitle$ = new Subject<INotification[]>();

  constructor(private http: HttpClient) {
  }

  getNotifications<T>() {

    return this.http.get<IJSONResponse<T>>([api.url, '?fields=title,author,published,text'].join(''), { headers: api.headers });
  }

  getNotification<T>(id: any) {
    return this.http.get<IJSONResponse<T>>(api.url + id, { headers: api.headers });
  }

  postNotification(data) {
    return this.http.post(api.url, data);
  }

  searchNotificationsByTitle(title: string) {

    this.http.get<IJSONResponse<INotification[]>>(api.url + `search?title=^${title}`, { headers: api.headers })
      .subscribe(data => {

        if (data && 'result' in data) {
          return this.subjectTitle$.next(data.result);
        } else {
          return this.subjectTitle$.next([]);
        }

      });
  }

  getIpAddress() {
    return this.http.get<IP>([environment.url, '/ip'].join(''));
  }
}
