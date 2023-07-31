import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabsComponent} from "../../shared/tabs/tabs.component";
import {AssetCreated} from "../../assets/types";
import {AnnouncementsService} from "../announcements.service";

@Component({
  selector: 'app-asset-overview',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  templateUrl: './asset-overview.component.html',
  styles: [
  ]
})
export class AssetOverviewComponent{
  asset: AssetCreated = {
    maintenanceStatus: '',
    location: '',
    usageStatus: '',
    name: '',
    description: '',
    warranty: [{
      id: '',
      dealer: '',
      serialNumber: 0,
      dateOfPurchasing: '',
      expirationDate: '',
      costOfPurchasing: 0,
      currentValue: 0,
    }]
  } as AssetCreated;
  activeTab: string = '';

  constructor(private assetCreatedAnnouncement: AnnouncementsService) {
    this.assetCreatedAnnouncement.assetCreatedAnnouncement$.subscribe(asset => {
      this.asset = asset
    })
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


}
