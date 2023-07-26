import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabsComponent} from "../../shared/tabs/tabs.component";

@Component({
  selector: 'app-asset-overview',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  templateUrl: './asset-overview.component.html',
  styles: [
  ]
})
export class AssetOverviewComponent {
  activeTab: string = '';
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
