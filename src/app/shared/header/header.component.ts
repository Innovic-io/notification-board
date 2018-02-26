import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  ipData: any;


  constructor(private notificationService: NotificationService) {

  }

  ngOnInit() {
    this.notificationService.getIpAddress().subscribe(data => {
      this.ipData = data['origin'];
    });
  }
}
