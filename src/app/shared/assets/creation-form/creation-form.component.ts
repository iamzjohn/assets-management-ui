import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from "../../input/input.component";
import {TextareaComponent} from "../../textarea/textarea.component";

@Component({
  selector: 'app-asset-creation-form',
  standalone: true,
  imports: [CommonModule, InputComponent, TextareaComponent],
  templateUrl: './creation-form.component.html',
  styles: []
})
export class AssetCreationFormComponent {
  form = {}
  file?: File | null;
  @Output() onChange = new EventEmitter<any>();
  @Output() onImageUpdate = new EventEmitter<any>();

  setFormData(name: string, value: number | string) {
    // @ts-ignore
    this.form[name] = value
    this.onChange.emit(this.form);
  }

  handleFileInput(files: FileList | null) {
    this.file = files?.item(0);
    const reader = new FileReader();
    reader.readAsDataURL(files?.item(0) as Blob);
    reader.onload = () => {
      // @ts-ignore
      const data = [
        {
          "fileName": files?.item(0)?.name,
          "fileLocation": "local",
          "url": "https://placehold.co/600x400"
          // "url": reader.result
        }
      ]
      this.onImageUpdate.emit(data);
    }
  }
}
