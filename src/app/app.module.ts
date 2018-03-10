import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes, routingComponents } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { AboutModule } from './features/about/about.module';

import { NotificationService } from './services/notification.service';
import { OverlayService } from './services/overlay.service';

import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { InvalidTooltipModule } from 'ng-invalid-tooltip';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    SharedModule,
    AboutModule,
    InvalidTooltipModule
  ],
  declarations: [
    AppComponent,
    routingComponents
  ],
  providers: [NotificationService, DatePipe, OverlayService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
