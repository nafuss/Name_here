import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { ChampionsComponent }      from './champions.component';
import { ChampionDetailComponent }  from './champion-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: ChampionDetailComponent
  },
  {
    path: 'champions',
    component: ChampionsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
