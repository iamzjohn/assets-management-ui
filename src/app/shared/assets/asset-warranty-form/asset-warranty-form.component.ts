import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputComponent} from "../../input/input.component";

@Component({
  selector: 'app-asset-warranty-form',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './asset-warranty-form.component.html',
  styles: [
  ]
})
export class AssetWarrantyFormComponent {

}
