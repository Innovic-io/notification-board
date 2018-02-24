import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../notification.service';
import {Notification} from '../../notification';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  notifications: Notification[];

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getNotifications();
  }

  getNotifications(): void {
    this.notifications = this.notificationService.getNotifications();
  }
}
