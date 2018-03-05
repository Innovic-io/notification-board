import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotificationService} from '../services/notification.service';
import {Observable} from 'rxjs/Observable';

import {INotification} from '../services/notification.interface';
import {IJSONResponse} from '../services/jsonResponse.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-pin-detail',
  templateUrl: './pin-detail.component.html',
  styleUrls: ['./pin-detail.component.css']
})
export class PinDetailComponent implements OnInit {

  notification$: Observable<IJSONResponse<INotification>>;

  constructor(private route: ActivatedRoute, private notificationService: NotificationService) {}

  ngOnInit() {

    const id = this.route.snapshot.params.id;

    this.notification$ = this.notificationService.getNotification(id);
  }

}
