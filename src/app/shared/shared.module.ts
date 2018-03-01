import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CardComponent} from './card/card.component';
import {HeaderComponent} from './header/header.component';
import {TimeAgoPipe} from './time-ago/time-ago.pipe';
import {CardOptionsComponent} from './card-options/card-options.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CardComponent,
    HeaderComponent,
    TimeAgoPipe,
    CardOptionsComponent
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    TimeAgoPipe,
    CardOptionsComponent
  ]
})
export class SharedModule {
}
