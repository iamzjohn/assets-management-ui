import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "../../shared/table/table.component";
import {AssetStatusComponent} from "../../assets/asset-status/asset-status.component";

@Component({
  selector: 'app-asset-activities',
  standalone: true,
  imports: [CommonModule, TableComponent, AssetStatusComponent],
  templateUrl: './asset-activities.component.html',
  styles: [
  ]
})
export class AssetActivitiesComponent {

}
