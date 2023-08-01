import {GenericResourceCreated} from "../shared/utils";
import {Technician} from "../technicians/types";
import {Maintenance} from "../maintenance/types";

export type Asset = {
  name: string;
  description: string;
  images?: AssetImages[];
  usageStatus: string;
  maintenanceStatus: string;
  visibility: string;
  category: string;
  location: string;
  nextPreventiveMaintenance: string;
  owner: string;
  manufacture: string
  model: string
  capacity: string
  // manufacturer: Manufacturer
  warranty: Warranty[]
  documents: Manual[]
  meters: RegisteredMeter[]
  maintenanceHistory: Maintenance[]
  activities: Activity[]
  jobCard: JobCard
}

type AssetImages = {
  id: string
  fileName: string
  fileLocation: string
  url: string
}

type Manufacturer = {
  name: string;
  model: string;
  capacity: string;
}

type Warranty = {
  id: string;
  dealer: string;
  serialNumber: number;
  dateOfPurchasing: string;
  expirationDate: string;
  costOfPurchasing: number;
  currentValue: number;
}

export type Manual = {
  name: string;
  url: string;
}

export type RegisteredMeter = {
  technician: Technician
  date: string
  amount: number
  unit: string
}

export type Activity = {
  name: string;
  date: string;
  status: string;
  technician: Technician;
}

export type JobCard = {
  tasks: JobTask[]
  requests: JobRequest[]
}

type JobRequest = {
  equipmentName: string
  technician: Technician
  date: string
  uniCost: number
}
type JobTask = {
  name: string
  duration: string
  description: string
  technician: Technician;
  equipments: TaskEquipment[]
}
type TaskEquipment = {
  name: string
  amount: number
  price: number
}

export type AssetCreated = GenericResourceCreated & Asset
