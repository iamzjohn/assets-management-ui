import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

type SelectOption = {
  label: string;
  value: string;
}
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styles: [
  ]
})
export class SelectComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() options:SelectOption[] = [];
}
