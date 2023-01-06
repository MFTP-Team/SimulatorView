import type { truckStatus } from "./enums/truckStatus"

export interface Truck{
    id:number,
    longitude:number, 
    latitude:number,
    power:number,
    id_station:number,
    status:truckStatus
}