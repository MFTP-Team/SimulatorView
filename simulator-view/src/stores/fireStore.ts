import { defineStore } from 'pinia'
import type { Fire } from '@/models/Fire'

export const useFireStore = defineStore({
    id:'fireStore',
    state: () => ({
        fireArray: [] as Fire[]
    }),
    getters: {
        getAllFire: (state):Fire[] =>{ return state.fireArray},
    },
    actions:{
        addFire(id:Number){ 
            //TO_DO : requete axios
        },
        deleteFire(id:Number){
           const indexToRemove:any = this.fireArray?.find(item =>{ return item.id === id})
           this.fireArray?.splice(indexToRemove,indexToRemove)
        }
    }
})