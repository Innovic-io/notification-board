import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { TimeAgoPipe } from './time-ago/time-ago.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CardComponent,
    HeaderComponent,
    TimeAgoPipe,
    CardDetailComponent
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    TimeAgoPipe,
    CardDetailComponent
  ]
})
export class SharedModule {
}
