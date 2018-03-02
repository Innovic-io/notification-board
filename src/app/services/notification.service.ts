import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment.staging';
import { api } from '../../environments/environment.api';
import { IJSONResponse } from './jsonResponse.interface';

export interface IP {
  origin: string;
}

@Injectable()
export class NotificationService {


  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getNotifications<T>(): Observable<IJSONResponse> {
    return this.http.get<IJSONResponse<T>>(api.url, {headers: api.headers});
  }


  postNotification(data): void {
    this.http.post(api.url, data).subscribe();
  }

  getNotification(id) {
    // const [notification] = NOTIFICATIONS.filter((item) => item.title === id);

    // return of(notification);
  }

  getIpAddress() {
    return this.http.get<IP>(environment.url + '/ip');
  }
}
