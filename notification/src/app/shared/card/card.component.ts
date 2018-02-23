import {Component, Input, OnInit} from '@angular/core';
import {Notification} from '../../notification';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  notification: Notification = {
    author: 'Miroslav',
    title: 'Prvo obavjestenje',
    text: 'Obavjestavaju se posjetioci da je projekat u toku.',
    published: new Date('2018, 02, 23'),
    url: 'www.notification-board.com/a1'
  };
  constructor() {
  }

  ngOnInit() {
  }

}
