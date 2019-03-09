import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ProgressComponent } from './components/pages/progress/progress.component';
import { GraficasComponent } from './components/pages/graficas/graficas.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { PagesComponent } from './components/pages/pages.component';
import { RegistroComponent } from './components/login/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    DashboardComponent,
    ProgressComponent,
    GraficasComponent,
    HeaderComponent,
    SidebarComponent,
    PagesComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
