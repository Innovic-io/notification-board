import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IP, NotificationService } from './services/notification.service';
import { INotification } from './services/notification.interface';
import { Router } from '@angular/router';
import { OverlayService } from './services/overlay.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ipData$: Observable<IP>;
  isOverlay$;
  notifications$: Subject<INotification[]>;

  constructor(private notificationService: NotificationService, private overlayService: OverlayService, public router: Router) {
  }

  ngOnInit() {
    this.ipData$ = this.notificationService.getIpAddress();
    this.notifications$ = this.notificationService.subjectTitle$;
    this.isOverlay$ = this.overlayService.getStatus();
  }

  setCover(data) {
    this.overlayService.toggleCover(data);
  }

  removeCover() {
    this.notifications$.next([]);
    this.overlayService.removeCover();
  }

  searchFocus(event) {
    this.notificationService.searchNotificationsByTitle(event);
  }
}
