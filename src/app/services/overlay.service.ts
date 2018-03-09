import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class OverlayService {

  private status = new BehaviorSubject(false);

  constructor() {}

  getStatus() {
    return this.status;
  }

  setCover() {
    this.status.next(true);
  }

  removeCover() {
    this.status.next(false);
  }
}
