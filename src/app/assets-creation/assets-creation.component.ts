import { Component } from '@angular/core';

@Component({
  selector: 'app-assets-creation',
  templateUrl: './assets-creation.component.html',
  styleUrls: ['./assets-creation.component.css']
})
export class AssetsCreationComponent {
  visibilityOptions = [
    { label: 'Everyone', value: 'public' },
    { label: 'Admin', value: 'private' },
  ]
}
