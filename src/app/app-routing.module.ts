import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AssetsComponent} from "./assets/assets.component";
import {MaintenanceComponent} from "./maintenance/maintenance.component";
import {WorkshopComponent} from "./workshop/workshop.component";
import {TechniciansComponent} from "./technicians/technicians.component";
import {AssetsCreationComponent} from "./assets-creation/assets-creation.component";

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
