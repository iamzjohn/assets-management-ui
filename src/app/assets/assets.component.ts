import {Component, OnInit} from '@angular/core';
import {Asset, AssetCreated} from "./types";
import {AssetService} from "../services/asset.service";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit{
  assets: AssetCreated[] = []

  constructor(private assetService: AssetService, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.getAssets()
  }

  getAssets() {
    this.assetService.getAssets().subscribe(assets => this.assets = assets)
  }

  sanitizeUrl(url: string | undefined) {
    if (!url) return ''
    return this.sanitizer.bypassSecurityTrustUrl(url)
  }

}
