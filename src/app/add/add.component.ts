import {Component, OnInit} from '@angular/core';

import {NotificationService} from '../services/notification.service';
import {NOTIFICATIONS} from '../services/mock-notifications';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  date = new Date();
  currentDate: string;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.currentDate = this.notificationService.transformDate(this.date);

    console.log(this.currentDate);
  }

  submitForm(data) {
    console.log(data.value);
    this.notificationService.postNotification(data.value, this.currentDate);
    console.log(NOTIFICATIONS);
    data.reset();
  }
}
