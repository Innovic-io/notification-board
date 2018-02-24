import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../notification.service';
import {Notification} from '../notification';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notifications: Notification[];

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getNotifications();
  }

  getNotifications(): void {
    this.notificationService.getNotifications()
      .subscribe(notifications => this.notifications = notifications);
  }
}
