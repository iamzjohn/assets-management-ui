import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "../../shared/table/table.component";
import {AssetStatusComponent} from "../../assets/asset-status/asset-status.component";

@Component({
  selector: 'app-asset-maintenance',
  standalone: true,
  imports: [CommonModule, TableComponent, AssetStatusComponent],
  templateUrl: './asset-maintenance.component.html',
  styles: [
  ]
})
export class AssetMaintenanceComponent {

}
