import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { Observable } from 'rxjs/Observable';
import { INotification } from '../../services/notification.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  notification$: Observable<INotification>;

  constructor(private route: ActivatedRoute, private notificationService: NotificationService) {
  }


  ngOnInit() {

    const id = this.route.snapshot.params.id;

    this.notification$ = this.notificationService.getNotification(id);
  }

}
