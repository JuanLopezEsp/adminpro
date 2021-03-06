import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: '', pathMatch: 'full', redirectTo: '/dashboard'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(routes);
