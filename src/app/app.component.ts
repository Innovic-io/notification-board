import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IP, NotificationService } from './services/notification.service';
import { IJSONResponse } from './services/jsonResponse.interface';
import { INotification } from './services/notification.interface';
import { Router } from '@angular/router';
import { OverlayService } from './services/overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ipData$: Observable<IP>;
  isOverlay$;
  notifications$: Observable<IJSONResponse<INotification[]>>;

  constructor(private notificationService: NotificationService, private overlayService: OverlayService, public router: Router) {
  }

  ngOnInit() {
    this.ipData$ = this.notificationService.getIpAddress();
    this.isOverlay$ = this.overlayService.getStatus();
  }

  setCover() {
    this.overlayService.setCover();
  }

  removeCover() {
    this.overlayService.removeCover();
  }

  searchFocus(event) {
    this.notificationService.searchNotificationsByTitle(event);
    this.notificationService.subjectTitle$.subscribe();
   // this.notifications$ = this.notificationService.subjectTitle$;
  }
}
