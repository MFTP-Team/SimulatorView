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
        async addSensor(id:number){ 
            try {
                const response = await axios.get(import.meta.env.VITE_BASE_URL_API + '/api/sensor/get/'+id)
                this.sensorArray.push(response.data)
            } catch (error) {
                console.log(error)
            }
        },
        deleteSensorFromArray(id:number){
           const indexToRemove:any = this.sensorArray?.find(item =>{ return item.id === id})
           this.sensorArray?.splice(indexToRemove,indexToRemove)
        },
        async deleteSensorFromDB(id:number){
            try {
                const response = await axios.delete(import.meta.env.VITE_BASE_URL_API + '/api/sensor/delete/'+id)
                this.deleteSensorFromArray(id)
            } catch (error) {
                console.log(error)
            }
        },
        async updateSensor(sensor:Sensor){
            try {
                const indexToUpdate:any = this.sensorArray?.find(item =>{ return item.id === sensor.id})
                const response = await axios.put(
                    import.meta.env.VITE_BASE_URL_API + '/api/sensor/edit',
                    { 
                        id:sensor.id,
                        latitude:sensor.latitude,
                        longitude:sensor.longitude,
                        radius:sensor.radius
                    }
                )

                //On verifie que l'objet retourné a le meme id que l'objet supprimé et qu'il est présent dans notre tableau locale
                if(response.status === 200){
                    this.sensorArray[indexToUpdate] = sensor
                }
            } catch (error) {
                console.log(error)
            }
        }, 
        async addSensorToBDD(latitude:number,longitude:number,radius:number){
            try {
                const response = await axios.post(
                    import.meta.env.VITE_BASE_URL_API + '/api/sensor/add',
                    { 
                        latitude:latitude,
                        longitude:longitude,
                        radius:radius
                    })
            } catch (error) {
                console.log(error)
            }
        }
    }
})