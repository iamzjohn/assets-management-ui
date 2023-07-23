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
import {SearchInputComponent} from "./shared/search-input/search-input.component";
import {SearchableInputComponent} from "./shared/searchable-input/searchable-input.component";
import {TableComponent} from "./shared/table/table.component";
import {AssetStatusComponent} from "./assets/asset-status/asset-status.component";

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
    DefaultLayoutComponent,
    SearchInputComponent,
    SearchableInputComponent,
    TableComponent,
    AssetStatusComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
