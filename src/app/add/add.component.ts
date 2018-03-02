import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  submitForm(data) {
    this.notificationService.postNotification(data.value);
    data.reset();
  }
}
