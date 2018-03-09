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
  @Input() notification: INotification;
  @Output() inputFocus = new EventEmitter();
  @Output() inputSearch = new EventEmitter();
  isOverlay;
  private searchTerms = new BehaviorSubject<string>('');
  @Input() notifications: IJSONResponse<INotification[]>;

  constructor(private overlayService: OverlayService) {
  }


  ngOnInit(): void {}

  search(event: any): void {
    this.searchTerms.next(event.target.value);
  }

  onFocus() {
    this.inputFocus.next(true);
  }


  removeCover() {
    this.isOverlay = this.overlayService.removeCover();
    this.inputFocus.next(false);
  }

  ngOnDestroy() {
    this.searchTerms.next('');
  }
}
