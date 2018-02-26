import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { TimeAgoPipe } from 'time-ago-pipe';
import { HeaderComponent } from './shared/header/header.component';
import { CardComponent } from './shared/card/card.component';
import { FormComponent } from './shared/form/form.component';
import { NotificationService } from './services/notification.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    AboutComponent,
    TimeAgoPipe,
    HeaderComponent,
    CardComponent,
    FormComponent
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
