import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IP } from '../../services/notification.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() ipData: IP;

  ngOnInit() {
  }
}
