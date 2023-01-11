import { defineStore } from 'pinia'
import type { Fire } from '@/models/Fire'
import axios from 'axios'

export const useFireStore = defineStore({
    id:'fireStore',
    state: () => ({
        fireArray: [] as Fire[]
    }),
    getters: {
        getAllFire: (state):Fire[] =>{ return state.fireArray},
    },
    actions:{
        async addFire(id:number){ 
            try {
                const response = await axios.get(import.meta.env.VITE_BASE_URL_API + '/api/fire/get/'+id)
                this.fireArray.push(response.data)
            } catch (error) {
                console.log(error)
            }
        },
        deleteFireFromArray(id:number){
            const indexToRemove:any = this.fireArray?.find(item =>{ return item.id === id})
            this.fireArray?.splice(indexToRemove,indexToRemove)
         },
         async deleteFireFromDB(id:number){
             try {
                 const response = await axios.delete(import.meta.env.VITE_BASE_URL_API + '/api/fire/delete/'+id)
                 this.deleteFireFromArray(id)
             } catch (error) {
                 console.log(error)
             }
         },
         async updateFire(fire:Fire){
             try {
                 const indexToUpdate:any = this.fireArray?.find(item =>{ return item.id === fire.id})
                 const response = await axios.put(
                     import.meta.env.VITE_BASE_URL_API + '/api/fire/edit',
                     { 
                         id:fire.id,
                         latitude:fire.latitude,
                         longitude:fire.longitude,
                         intensity:fire.intensity
                     }
                 )
 
                 //On verifie que l'objet retourné a le meme id que l'objet supprimé et qu'il est présent dans notre tableau locale
                 if(response.status === 200){
                    this.fireArray[indexToUpdate] = fire
                 }
             } catch (error) {
                 console.log(error)
             }
        },
        async addFireToBDD(latitude:number,longitude:number,power:number){
            try {
                const response = await axios.post(
                    import.meta.env.VITE_BASE_URL_API + '/api/fire/add',
                    { 
                        latitude:latitude,
                        longitude:longitude,
                        power:power
                    })
            } catch (error) {
                console.log(error)
            }
        }
    }
})