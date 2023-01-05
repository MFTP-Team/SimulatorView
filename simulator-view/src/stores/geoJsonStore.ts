//Stocke les geoJson lors du démarrage
import { defineStore } from 'pinia'

export const useGeoJsonStore = defineStore({
    id:'geoJsonStore',
    state: () => ({
        geoJsonStoreFires:"src/assets/ressources-test/json-fires-test.json",
        geoJsonStorePolygonSensor:import.meta.env.VITE_BASE_URL_API+'/api/sensor/geo/polygon',
        geoJsonStorePointSensor:import.meta.env.VITE_BASE_URL_API+'/api/sensor/geo/point',
        geoJsonStoreTrucks:"src/assets/ressources-test/json-trucks-test.json",
    }),
    getters: {
        getGeoJsonFires: (state):string =>{ return state.geoJsonStoreFires},
        getGeoJsonPolygonSensors: (state):string =>{ return state.geoJsonStorePolygonSensor},
        getGeoJsonPointSensors: (state):string =>{ return state.geoJsonStorePointSensor},
        getGeoJsonTrucks: (state):string =>{ return state.geoJsonStoreTrucks},
    },
    actions:{
    }
})