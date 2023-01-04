//Stocke les geoJson lors du démarrage
import { defineStore } from 'pinia'

export const useGeoJsonStore = defineStore({
    id:'geoJsonStore',
    state: () => ({
        geoJsonStoreFires:"src/assets/ressources-test/json-fires-test.json",
        geoJsonStoreStations:import.meta.env.VITE_BASE_URL_API+'/api/resource/station/geo',
        geoJsonStoreTrucks:"src/assets/ressources-test/json-trucks-test.json",
    }),
    getters: {
        getGeoJsonFires: (state):string =>{ return state.geoJsonStoreFires},
        getGeoJsonStations: (state):string =>{ return state.geoJsonStoreStations},
        getGeoJsonTrucks: (state):string =>{ return state.geoJsonStoreTrucks},
    },
    actions:{
    }
})