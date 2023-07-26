import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collapsible-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collapsible-card.component.html',
  styles: [
  ]
})
export class CollapsibleCardComponent {
  @Input() title: string = '';
  @Input() duration: string = '';
  @Input() isOpen: boolean = false;

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
