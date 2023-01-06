import type {fireStatus} from "./enums/fireStatus"

export interface Fire{
    id:number,
    longitude:number, 
    latitude:number,
    intensity:number,
    status:fireStatus
}