import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {NotificationService} from '../services/notification.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private notificationService: NotificationService, private router: Router) {
  }

  ngOnInit() {
  }

  submitForm(form) {

    this.notificationService.postNotification(form.value)
      .subscribe((data) => {
        console.log(data);
        form.reset();
        this.router.navigate(['../dashboard']);
      }, (err) => {
        console.log(err);
      });
  }
}
