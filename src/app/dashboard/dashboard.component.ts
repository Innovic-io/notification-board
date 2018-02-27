import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NotificationService } from '../services/notification.service';
import { INotification } from '../services/notification.interface';
import { NOTIFICATIONS } from '../services/mock-notifications';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notifications: Observable<INotification[]>;

  notifications = NOTIFICATIONS;

  selectedNotification: Notification;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.notifications = this.notificationService.getNotifications();
  }

  onSelect(notification: Notification): void {
    this.selectedNotification = notification;
  }
}
