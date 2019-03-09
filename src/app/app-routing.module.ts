import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PagesComponent } from './components/pages/pages.component';
import { RegistroComponent } from './components/login/registro.component';

const routes: Routes = [
  {path: '',
  component: PagesComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: '', pathMatch: 'full', redirectTo: '/dashboard'}
  ]
},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
