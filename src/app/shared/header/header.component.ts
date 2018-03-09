import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { IP, NotificationService } from '../../services/notification.service';
import { INotification } from '../../services/notification.interface';
import { OverlayService } from '../../services/overlay.service';
import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { IJSONResponse } from '../../services/jsonResponse.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
  notifications$: Observable<IJSONResponse<INotification[]>>;
  private searchTerms = new BehaviorSubject<string>('');

  constructor(private overlayService: OverlayService, private notificationService: NotificationService) {
  }


  ngOnInit(): void {
    this.notifications$ = this.searchTerms.pipe(
      debounceTime(50),
      distinctUntilChanged(),
      switchMap((title: string) => this.notificationService.searchNotificationsByTitle(title)),
    );
  }

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
