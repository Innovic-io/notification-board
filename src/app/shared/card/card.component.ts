import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {INotification} from '../../services/notification.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() notification: INotification;
  constructor() {
  }

  ngOnInit() {
  }
}
