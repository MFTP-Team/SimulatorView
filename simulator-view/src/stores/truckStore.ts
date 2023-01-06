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
        async addTruck(id:number){ 
            try {
                const response = await axios.get(import.meta.env.VITE_BASE_URL_API + '/api/truck/get/'+id)
                this.truckArray.push(response.data)
            } catch (error) {
                console.log(error)
            }
        },
        deleteTruckFromArray(id:number){
            const indexToRemove:any = this.truckArray?.find(item =>{ return item.id === id})
            this.truckArray?.splice(indexToRemove,indexToRemove)
         },
         async deleteTruckFromDB(id:number){
             try {
                 const response = await axios.delete(import.meta.env.VITE_BASE_URL_API + '/api/truck/delete/'+id)
                 this.deleteTruckFromArray(id)
             } catch (error) {
                 console.log(error)
             }
         },
         async updateTruck(truck:Truck){
             try {
                 const indexToUpdate:any = this.truckArray?.find(item =>{ return item.id === truck.id})
                 const response = await axios.put(
                     import.meta.env.VITE_BASE_URL_API + '/api/truck/edit',
                     { 
                         id:truck.id,
                         latitude:truck.latitude,
                         longitude:truck.longitude,
                         power:truck.power
                     }
                 )
 
                 //On verifie que l'objet retourné a le meme id que l'objet supprimé et qu'il est présent dans notre tableau locale
                 if(response.status === 200){
                    this.truckArray[indexToUpdate] = truck
                 }
             } catch (error) {
                 console.log(error)
             }
         }
    }
})