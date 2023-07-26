import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
}
