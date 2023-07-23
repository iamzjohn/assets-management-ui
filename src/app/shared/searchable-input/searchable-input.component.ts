import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-searchable-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searchable-input.component.html',
  styleUrls: ['./searchable-input.component.css']
})
export class SearchableInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
}
