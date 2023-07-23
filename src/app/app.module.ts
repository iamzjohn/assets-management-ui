import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DefaultLayoutComponent} from "./shared/default-layout/default-layout.component";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetsComponent } from './assets/assets.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { TechniciansComponent } from './technicians/technicians.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AssetsComponent,
    MaintenanceComponent,
    WorkshopComponent,
    TechniciansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
