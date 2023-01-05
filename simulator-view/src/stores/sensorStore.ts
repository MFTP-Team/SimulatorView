import { defineStore } from 'pinia'
import type { Sensor } from '@/models/Sensor'
import axios from 'axios'

export const useSensorStore = defineStore({
    id:'sensorStore',
    state: () => ({
        sensorArray: [] as Sensor[]
    }),
    getters: {
        getAllsensor: (state):Sensor[] =>{ return state.sensorArray},
    },
    actions:{
        async addSensor(id:Number){ 
            try {
                const response = await axios.get(import.meta.env.VITE_BASE_URL_API + '/api/resource/get/sensor/'+id)
                this.sensorArray.push(response.data)
            } catch (error) {
                console.log(error)
            }
        },
        deleteSensor(id:Number){
           const indexToRemove:any = this.sensorArray?.find(item =>{ return item.id === id})
           this.sensorArray?.splice(indexToRemove,indexToRemove)
        }
    }
})