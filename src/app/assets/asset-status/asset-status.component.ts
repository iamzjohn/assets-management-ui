import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asset-status',
  standalone: true,
  imports: [CommonModule],
  template: `
      <span class="flex items-center justify-center w-full rounded-full border-2 px-4 py-2" [ngClass]="{
            'bg-green-100 border-green-500': status === 'success',
            'bg-yellow-100 border-yellow-500': status === 'warning',
            'bg-red-200 border-red-500': status === 'danger',
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
