import { Component } from '@angular/core';
import {AssetCreated} from "./types";


@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent {
  listItems: AssetCreated[] = []
}
