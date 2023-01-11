import { defineStore } from 'pinia'
import axios from 'axios'
import type {Alert} from '@/models/Alert'

export const useAlertStore = defineStore({
    id:'alertStore',
    state: () => ({
        alertArray: [] as Alert[]
    }),
    getters: {
        getAllAlert: (state):Alert[] =>{ return state.alertArray},
    },
    actions:{
        async getAlerts(){ 
            try {
                const response = await axios.get(import.meta.env.VITE_BASE_URL_API + '/api/alert/get')
                this.alertArray = response.data
            } catch (error) {
                console.log(error)
            }
        }
    }
})