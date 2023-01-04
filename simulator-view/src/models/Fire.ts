import type {fireStatus} from "./enums/fireStatus"

export interface Fire{
    id:Number,
    longitude:Number, 
    latitude:Number,
    intensity:Number,
    status:fireStatus
}