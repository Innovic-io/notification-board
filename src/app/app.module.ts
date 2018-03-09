import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

import { NotificationService } from './services/notification.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { AboutModule } from './features/about/about.module';
import { DatePipe } from '@angular/common';
import { InvalidTooltipModule } from 'ng-invalid-tooltip';
import { PinDetailComponent } from './pin-detail/pin-detail.component';
import { OverlayService } from './services/overlay.service';


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
    DashboardComponent,
    AddComponent,
    PinDetailComponent
  ],
  providers: [NotificationService, DatePipe, OverlayService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
