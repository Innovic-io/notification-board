import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment.staging';
import {api} from '../../environments/environment.api';
import {IJSONResponse} from './jsonResponse.interface';

export interface IP {
  origin: string;
}

@Injectable()
export class NotificationService {

  constructor(private http: HttpClient) {
  }

  getNotifications<T>() {

    return this.http.get<IJSONResponse<T>>([api.url, '?fields=title,author,published,text'].join(''), {headers: api.headers});
  }

  getNotification<T>(id: any) {
    return this.http.get<IJSONResponse<T>>(api.url + id, {headers: api.headers});
  }

  postNotification(data) {
    return this.http.post(api.url, data);
  }

  searchNotificationsByTitle<T>(title: string) {
    return this.http.get<IJSONResponse<T>>(api.url + `search?title=^${title}`, {headers: api.headers});
  }

  getIpAddress() {
    return this.http.get<IP>([environment.url, '/ip'].join(''));
  }
}
