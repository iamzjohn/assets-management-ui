import {Component, OnInit} from '@angular/core';
import {Asset, AssetCreated} from "./types";
import {AssetService} from "../services/asset.service";


@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit{
  assets: AssetCreated[] = []

  constructor(private assetService: AssetService) {}
  ngOnInit(): void {
    this.getAssets()
  }

  getAssets() {
    this.assetService.getAssets().subscribe(assets => this.assets = assets)
  }


}
