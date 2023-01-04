import { defineStore } from 'pinia'
import type { Truck } from '@/models/Truck'

export const useTruckStore = defineStore({
    id:'truckStore',
    state: () => ({
        truckArray: [] as Truck[]
    }),
    getters: {
        getAllTruck: (state):Truck[]=>{ return state.truckArray},
    },
    actions:{
        addTruck(id:Number){ 
            //TO_DO : requete axios
        },
        deleteTruck(id:Number){
           const indexToRemove:any = this.truckArray?.find(item =>{ return item.id === id})
           this.truckArray?.splice(indexToRemove,indexToRemove)
        }
    }
})