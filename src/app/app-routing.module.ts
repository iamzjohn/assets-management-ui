import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AssetsComponent} from "./assets/assets.component";
import {MaintenanceComponent} from "./maintenance/maintenance.component";
import {WorkshopComponent} from "./workshop/workshop.component";
import {TechniciansComponent} from "./technicians/technicians.component";
import {AssetsCreationComponent} from "./assets-creation/assets-creation.component";
import {AssetsDetailsComponent} from "./assets-details/assets-details.component";
import {AssetOverviewComponent} from "./assets-details/asset-overview/asset-overview.component";
import {AssetMetersComponent} from "./assets-details/asset-meters/asset-meters.component";
import {AssetMaintenanceComponent} from "./assets-details/asset-maintenance/asset-maintenance.component";
import {AssetActivitiesComponent} from "./assets-details/asset-activities/asset-activities.component";
import {AssetJobsComponent} from "./assets-details/asset-jobs/asset-jobs.component";

const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: '',
    title: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: 'assets',
    title: 'Assets',
    component: AssetsComponent
  },
  {
    path: 'assets/register',
    title: 'Register Asset',
    component: AssetsCreationComponent
  },
  {
    path: 'assets/:id',
    title: 'Register Asset',
    component: AssetsDetailsComponent,
    children: [
      {
        path: 'overview',
        component: AssetOverviewComponent
      },
      {
        path: 'meters',
        component: AssetMetersComponent
      },
      {
        path: 'maintenance',
        component: AssetMaintenanceComponent
      },
      {
        path: 'activities',
        component: AssetActivitiesComponent
      },
      {
        path: 'jobs',
        component: AssetJobsComponent
      },
    ]
  },
  {
    path: 'maintenance',
    title: 'Maintenance',
    component: MaintenanceComponent
  },
  {
    path: 'workshops',
    title: 'Workshop',
    component: WorkshopComponent
  },
  {
    path: 'technicians',
    title: 'Technicians',
    component: TechniciansComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
