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
        async addFire(id:Number){ 
            try {
                const response = await axios.get(import.meta.env.VITE_BASE_URL_API + '/api/fire/get/'+id)
                this.fireArray.push(response.data)
            } catch (error) {
                console.log(error)
            }
        },
        deleteFire(id:Number){
           const indexToRemove:any = this.fireArray?.find(item =>{ return item.id === id})
           this.fireArray?.splice(indexToRemove,indexToRemove)
        }
    }
})