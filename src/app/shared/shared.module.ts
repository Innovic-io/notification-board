import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { CardOptionsComponent } from './card-options/card-options.component';
import { SortByPipe } from './pipes/sort-by-pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CardComponent,
    HeaderComponent,
    TimeAgoPipe,
    SortByPipe,
    CardOptionsComponent
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    TimeAgoPipe,
    SortByPipe,
    CardOptionsComponent
  ]
})
export class SharedModule {
}
