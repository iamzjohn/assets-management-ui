import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "../../shared/table/table.component";

@Component({
  selector: 'app-asset-meters',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './asset-meters.component.html',
  styles: [
  ]
})
export class AssetMetersComponent {

}
