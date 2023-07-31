import { Injectable } from '@angular/core';
import {Asset, AssetCreated} from "../assets/types";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";



@Injectable({providedIn: 'root'})
export class AssetService {
  baseUrl = 'http://195.154.102.249:7272/api/v1/Assets'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getAssets(): Observable<AssetCreated[]> {
    return this.http.get<AssetCreated[]>(this.baseUrl)
  }

  addAsset(asset: any): Observable<Asset> {
    return this.http.post<Asset>(this.baseUrl, asset, this.httpOptions)
  }
  getOneAsset(id: string): Observable<Asset> {
    return this.http.get<Asset>(`${this.baseUrl}/${id}`)
  }

}
