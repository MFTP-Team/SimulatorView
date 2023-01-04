import { defineStore } from 'pinia'
import type { Station } from '@/models/Station'
import axios from 'axios'

export const useStationStore = defineStore({
    id:'stationStore',
    state: () => ({
        stationArray: [] as Station[]
    }),
    getters: {
        getAllStation: (state):Station[] =>{ return state.stationArray},
    },
    actions:{
        async addStation(id:Number){ 
            try {
                const response = await axios.get(import.meta.env.VITE_BASE_URL_API + '/api/resource/get/station/'+id)
                this.stationArray.push(response.data)
            } catch (error) {
                console.log(error)
            }
        },
        deleteStation(id:Number){
           const indexToRemove:any = this.stationArray?.find(item =>{ return item.id === id})
           this.stationArray?.splice(indexToRemove,indexToRemove)
        }
    }
})