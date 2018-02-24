import {Component, Input, OnInit} from '@angular/core';
import {Notification} from '../../notification';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() notifications: Notification[];

  constructor() {
  }

  ngOnInit() {
  }
}
