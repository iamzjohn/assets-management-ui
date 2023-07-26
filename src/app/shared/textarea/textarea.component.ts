import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textarea.component.html',
  styles: [
  ]
})
export class TextareaComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
}
