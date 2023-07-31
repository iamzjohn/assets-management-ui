import {Component, OnInit} from '@angular/core';
import { AssetService } from '../services/asset.service';
import {AssetCreated} from "../assets/types";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {AnnouncementsService} from "./announcements.service";

@Component({
  selector: 'app-assets-details',
  templateUrl: './assets-details.component.html',
  styleUrls: ['./assets-details.component.css']
})
export class AssetsDetailsComponent implements OnInit{
  asset: AssetCreated | undefined
  constructor(private assetService: AssetService, private route: ActivatedRoute, private location: Location, private assetGetAnnouncement: AnnouncementsService)  {}


  getAsset() {
    const id = this.route.snapshot.paramMap.get('id') ?? '0'
    this.assetService.getOneAsset(id).subscribe(asset => {
      this.asset = asset
      this.assetGetAnnouncement.announceAssetCreated(asset)
    })
  }

  ngOnInit(): void {
    this.getAsset()
  }
}
