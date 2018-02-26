import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    CardComponent,
    HeaderComponent,
    TimeAgoPipe
  ],
  exports: [
    CardComponent,
    HeaderComponent,
  ]
})
export class SharedModule {
}