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
import {DateInputComponent} from "./shared/date-input/date-input.component";
import { AssetsCreationComponent } from './assets-creation/assets-creation.component';
import {CardComponent} from "./shared/card/card.component";
import {AssetCreationFormComponent} from "./shared/assets/creation-form/creation-form.component";
import {AssetWarrantyFormComponent} from "./shared/assets/asset-warranty-form/asset-warranty-form.component";
import {SelectComponent} from "./shared/select/select.component";
import {InputComponent} from "./shared/input/input.component";
import { AssetsDetailsComponent } from './assets-details/assets-details.component';
import {
    MaintenanceMounthlyDisplayComponent
} from "./maintenance/dates/maintenance-mounthly-display/maintenance-mounthly-display.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AssetsComponent,
    MaintenanceComponent,
    WorkshopComponent,
    TechniciansComponent,
    AssetsCreationComponent,
    AssetsDetailsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DefaultLayoutComponent,
        SearchInputComponent,
        SearchableInputComponent,
        TableComponent,
        AssetStatusComponent,
        DateInputComponent,
        CardComponent,
        AssetCreationFormComponent,
        AssetWarrantyFormComponent,
        SelectComponent,
        InputComponent,
        MaintenanceMounthlyDisplayComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
