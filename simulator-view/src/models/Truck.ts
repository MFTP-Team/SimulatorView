import type { truckStatus } from "./enums/truckStatus"

export interface Truck{
    id:Number,
    longitude:Number, 
    latitude:Number,
    power:Number,
    id_station:Number,
    status:truckStatus
}