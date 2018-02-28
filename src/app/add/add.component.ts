import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  date = new Date();
  currentDate: any;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.currentDate = this.notificationService.transformDate(this.date);

    console.log(this.currentDate);
  }

  submitForm(data) {
    console.log(data.value);
    data.reset();
  }
}
