import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../services/notification.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  result$: Observable<any>;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  submitForm(form) {

    this.notificationService.postNotification(form.value)
      .subscribe((data) => {
        console.log(data);
        form.reset();

        // @TODO redirect to dashboard
      }, (err) => {
        console.log(err);
      });
  }
}
