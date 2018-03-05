import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment.staging';
import {api} from '../../environments/environment.api';
import {IJSONResponse} from './jsonResponse.interface';
import {of} from 'rxjs/observable/of';

export interface IP {
  origin: string;
}

@Injectable()
export class NotificationService {

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

  searchNotifications<T>(term: string) {
    if (!term.trim()) {
      return of(null);
    }
    return this.http.get<IJSONResponse<T>>(`${api.url}?fields=${term}`);
  }

  getIpAddress() {
    return this.http.get<IP>(environment.url + '/ip');
  }
}
