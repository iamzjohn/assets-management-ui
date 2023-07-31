import {Component} from '@angular/core';
import {AssetService} from "../services/asset.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-assets-creation',
  templateUrl: './assets-creation.component.html',
  styleUrls: ['./assets-creation.component.css']
})
export class AssetsCreationComponent {
  newAsset = {
    createAsset: {
      name: '',
      manufacture: '',
      model: '',
      capacity: '',
      category: 'Category A',
      location: 'Warehouse',
      usageStatus: 'In Use',
      description: '',
      maintenanceStatus: 'Up to date',
    },
    createDescriptions: [{description: ''}],
    createImages: [],
    createWarranty: {
      dealer: '',
      serialNumber: 0,
      dateOfPurchasing: '',
      costOfPurchasing: 0,
      currentValue: 0,
      exiparationDate: '',
    }
  }
  visibilityOptions = [
    {label: 'Everyone', value: 'public'},
    {label: 'Admin', value: 'private'},
  ]

  constructor(private assetsService: AssetService, private location: Location) {
  }

  setFormData(name: string, value: any) {
    // @ts-ignore
    this.newAsset[name] = value
  }

  updateCategory(value: string) {
    // @ts-ignore
    this.newAsset.createAsset.category = value
  }

  handleSubmit() {
    console.log(this.newAsset)
    // @ts-ignore
    this.newAsset.createDescriptions = [{description: this.newAsset.createAsset.description}]
    this.newAsset.createAsset = {
      ...this.newAsset.createAsset,
      category: 'Category A',
      location: 'Warehouse',
      usageStatus: 'In Use',
      maintenanceStatus: 'Up to date',
    }
    this.assetsService.addAsset(this.newAsset).subscribe((data) => {
      console.log(data)
      this.location.back()
    })
  }
}
