import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {TabsComponent} from "../../shared/tabs/tabs.component";
import {TableComponent} from "../../shared/table/table.component";
import {AssetStatusComponent} from "../../assets/asset-status/asset-status.component";
import {CollapsibleCardComponent} from "./collapsible-card/collapsible-card.component";

@Component({
  selector: 'app-asset-jobs',
  standalone: true,
  imports: [CommonModule, RouterLink, TabsComponent, TableComponent, AssetStatusComponent, CollapsibleCardComponent],
  templateUrl: './asset-jobs.component.html',
  styles: [
  ]
})
export class AssetJobsComponent {
  activeTab: string = '';
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
