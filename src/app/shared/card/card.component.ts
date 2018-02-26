import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core';
import { INotification } from '../../services/notification.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() notification: INotification;

  inside: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('mouseover', ['$event'])
  onHover() {
    // console.log('hover');
    this.inside = true;
  }

  @HostListener('mouseleave', ['$event'])
  onLeave() {
    // console.log('leave');
    this.inside = false;
  }
}
