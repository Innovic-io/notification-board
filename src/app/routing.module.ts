import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { CardDetailComponent } from './shared/card-detail/card-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pin/:id', component: CardDetailComponent },
  { path: 'add', component: AddComponent },
  { path: 'about', loadChildren: 'app/features/about/about.module#AboutModule' },
];
