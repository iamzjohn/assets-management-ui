import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maintenance-mounthly-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maintenance-mounthly-display.component.html',
  styles: [
  ]
})
export class MaintenanceMounthlyDisplayComponent {
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

}
