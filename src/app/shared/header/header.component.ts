import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

import {IP, NotificationService} from '../../services/notification.service';
import {INotification} from '../../services/notification.interface';
import {OverlayService} from '../../services/overlay.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {IJSONResponse} from '../../services/jsonResponse.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() title: string;
  @Input() ipData: IP;
  @Input() notifications: INotification[];
  @Input() isOverlay;

  @Output() inputFocus = new EventEmitter();
  @Output() inputSearch = new EventEmitter();

  ngOnInit(): void {}

  search(event: any): void {
    this.inputSearch.next(event);
  }

  onFocus() {
    this.inputFocus.next(true);
  }

  removeCover() {
    this.inputFocus.next(false);
  }

  ngOnDestroy() {
    this.inputSearch.next('');
  }
}
