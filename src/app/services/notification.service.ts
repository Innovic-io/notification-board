import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import 'rxjs/add/operator/filter';

import { api } from '../../environments/environment.api';
import { IJSONResponse } from './jsonResponse.interface';
import { Subject } from 'rxjs/Subject';
import { INotification } from './notification.interface';


@Injectable()
export class NotificationService {

  subjectTitle$ = new Subject<INotification[]>();

  constructor(private http: HttpClient) {
  }

  getNotifications<T>() {

    return this.http.get<IJSONResponse<T>>([api.url, '?fields=title,author,published,text'].join(''), {headers: api.headers})
      .pipe(
        retry(3),
        catchError(this.handleError));
  }

  getNotification<T>(id: any) {
    return this.http.get<IJSONResponse<T>>(api.url + id, {headers: api.headers});
  }

  postNotification(data) {
    return this.http.post(api.url, data);
  }

  searchNotificationsByTitle(title: string) {

    this.http.get<IJSONResponse<INotification[]>>(api.url + `search?title=^${title}`, {headers: api.headers})
      .subscribe(data => {

        if (data && 'result' in data) {
          return this.subjectTitle$.next(data.result);
        } else {
          return this.subjectTitle$.next([]);
        }

      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      if (error.status === 400)
        console.error('Bad request');
      else if (error.status === 401) {
        console.log('Unauthorized');
      }
    }
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
}
