import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {AssetCreated} from "../assets/types";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  private assetCreatedAnnouncement = new Subject<AssetCreated>()

  assetCreatedAnnouncement$ = this.assetCreatedAnnouncement.asObservable()

  announceAssetCreated(asset: AssetCreated) {
    this.assetCreatedAnnouncement.next(asset)
  }
}
