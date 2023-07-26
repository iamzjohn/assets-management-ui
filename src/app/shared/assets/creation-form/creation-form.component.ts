import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputComponent} from "../../input/input.component";
import {TextareaComponent} from "../../textarea/textarea.component";

@Component({
  selector: 'app-asset-creation-form',
  standalone: true,
  imports: [CommonModule, InputComponent, TextareaComponent],
  templateUrl: './creation-form.component.html',
  styles: [
  ]
})
export class AssetCreationFormComponent {

}
