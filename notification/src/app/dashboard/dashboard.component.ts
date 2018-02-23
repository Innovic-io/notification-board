import {Component, OnInit} from '@angular/core';
import { NOTIFICATIONS } from '../mock-notifications';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  notifications = NOTIFICATIONS;

  constructor() {
  }

  ngOnInit() {
  }

}
