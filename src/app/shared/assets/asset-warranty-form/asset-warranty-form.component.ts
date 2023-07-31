import {Component, EventEmitter, Output} from '@angular/core';
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
  form = {}
  @Output() onChange = new EventEmitter<any>();

  setFormData(name: string, value: number | string) {
    // @ts-ignore
    this.form[name] = value
    this.onChange.emit(this.form);
  }

  protected readonly parseInt = parseInt;
}
