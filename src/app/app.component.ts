import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IP, NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ipData$: Observable<IP>;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {

    this.ipData$ = this.notificationService.getIpAddress();
  }
}
