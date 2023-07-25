import {Activity, AssetCreated, JobCard, Manual, RegisteredMeter} from "./types";
import { faker } from '@faker-js/faker'
import {Technician} from "../technicians/types";
import {Maintenance} from "../maintenance/types";

const generateAsset = (): AssetCreated => ({
  id: `${faker.number.int()}`,
  name: faker.helpers.arrayElement(['Forklift', 'Payloader', 'Tractor/Tug Master', 'Vessel excavator', 'Rail excavator', 'Trailer', 'Skip Trippler']),
  description: faker.lorem.text(),
  image: faker.image.urlLoremFlickr({category: 'car'}),
  visibility: 'available',
  category: 'Heavy Load',
  location: 'Warehouse',
  nextPreventiveMaintenance: faker.date.future().toDateString(),
  owner: 'Porto de Maputo',
  manufacturer: {
    name: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    capacity: faker.helpers.arrayElement(['500 lbs', '3.5 cubic yards', '40 Tons'])
  },
  warranty: {
    purchaseDate: faker.date.past().toDateString(),
    purchaseCost: faker.number.int(),
    actualCost: faker.number.int(),
    dealer: faker.vehicle.manufacturer(),
    depreciation: faker.lorem.word(),
    expirationDate: faker.date.future().toDateString()
  },
  documents: generateDocuments(faker.number.int({max: 4})),
  meters: generateMeters(faker.number.int({max: 4})),
  status: faker.helpers.arrayElement(['available']),
  activities: generateActivities(faker.number.int({max: 4})),
  maintenanceHistory: generateMaintenances(faker.number.int({max: 4})),
  jobCard: generateJobCard(),
  createdAt: faker.date.past().toDateString(),
  updatedAt: faker.date.past().toDateString(),
})

const generateMaintenances = (length: number): Maintenance[] => {
  return Array.from({length}, () => ({
    date: faker.date.past().toDateString(),
    type: faker.helpers.arrayElement(['Corrective', 'Preventive']),
    status: 'success',
    issue: faker.lorem.words()
  }))
}
const generateActivities = (length: number): Activity[] => {
  return Array.from({length}, () => ({
    name: faker.lorem.words(),
    date: faker.date.past().toDateString(),
    status: 'success',
    technician: generateTechnician()
  }))
}
const generateDocuments = (length: number): Manual[] => {
  return Array.from({length}, () => ({
    name: faker.lorem.words({min: 1, max: 3}),
    url: faker.internet.url()
  }))
}

const generateMeters = (length: number): RegisteredMeter[] => {
  return Array.from({length}, () => ({
    date: faker.date.past().toDateString(),
    amount: faker.number.int(),
    unit: faker.helpers.arrayElement(['Hours', 'Days', 'Months']),
    technician: generateTechnician()
  }))
}

const generateTechnician = (): Technician => ({
  name: faker.person.fullName(),
  area: faker.person.jobArea(),
  phone: faker.phone.number('+258 8# #### ###'),
  status: faker.helpers.arrayElement(['available']),
  salaryPerHour: faker.number.int()
})

const generateJobCard = (): JobCard => ({
  tasks: Array.from({length: faker.number.int()},() => ({
    name: faker.lorem.words(),
    duration: `${faker.number.int()} Min`,
    description: faker.lorem.text(),
    technician: generateTechnician(),
    equipments: Array.from({length: faker.number.int()}, () => ({
      name: faker.lorem.words(),
      amount: faker.number.int(),
      price: faker.number.int()
    }))
  }) ),
  requests: Array.from({length: faker.number.int()}, () => ({
    equipmentName: faker.lorem.words(),
    technician: generateTechnician(),
    date: faker.date.past().toDateString(),
    uniCost: faker.number.int()
  }))
})
