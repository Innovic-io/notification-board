import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { PinDetailComponent } from './pin-detail/pin-detail.component';

export const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'pin/:id', component: PinDetailComponent},
  {path: 'add', component: AddComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'about', loadChildren: 'app/features/about/about.module#AboutModule'}
];
export const routingComponents = [DashboardComponent, AddComponent, PinDetailComponent];
