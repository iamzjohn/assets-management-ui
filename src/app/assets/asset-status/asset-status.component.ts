import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asset-status',
  standalone: true,
  imports: [CommonModule],
  template: `
      <span class="flex items-center justify-center w-full rounded-full border-2 px-4 py-2" [ngClass]="{
            'bg-green-200 border-green-500': status === 'in_storage',
            'bg-yellow-100 border-yellow-500': status === 'in_use',
            'bg-red-200 border-red-500': status === 'in_maintenance',
        }">
      <ng-content/>
    </span>
  `,
  styles: [
  ]
})
export class AssetStatusComponent {
  @Input() status: string = ''

}
