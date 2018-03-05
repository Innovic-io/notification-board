import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IP } from '../../services/notification.service';
import { INotification } from '../../services/notification.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() ipData: IP;
  @Input() notifications;
  @Input() notification: INotification;
  @Output() inputFocus = new EventEmitter();
  @Output() inputSearch = new EventEmitter();

  ngOnInit() {
  }

  onFocus() {
    this.inputFocus.next(true);
  }

  onInputChange(event) {
    this.notifications = this.inputSearch.next(event.srcElement.value);
  }
}
