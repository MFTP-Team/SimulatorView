import { defineStore } from 'pinia'
import type { Truck } from '@/models/Truck'
import axios from 'axios'

export const useTruckStore = defineStore({
    id:'truckStore',
    state: () => ({
        truckArray: [] as Truck[]
    }),
    getters: {
        getAllTruck: (state):Truck[]=>{ return state.truckArray},
    },
    actions:{
        async addTruck(id:Number){ 
            try {
                const response = await axios.get(import.meta.env.VITE_BASE_URL_API + '/api/truck/get/'+id)
                this.truckArray.push(response.data)
            } catch (error) {
                console.log(error)
            }
        },
        deleteTruck(id:Number){
           const indexToRemove:any = this.truckArray?.find(item =>{ return item.id === id})
           this.truckArray?.splice(indexToRemove,indexToRemove)
        }
    }
})