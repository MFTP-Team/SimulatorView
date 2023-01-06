//Stocke les geoJson lors du démarrage
import { defineStore } from 'pinia'

export const useGeoJsonStore = defineStore({
    id:'geoJsonStore',
    state: () => ({
        geoJsonStorePolygonFire:import.meta.env.VITE_BASE_URL_API+'/api/fire/geo/polygon',
        geoJsonStorePointFire:import.meta.env.VITE_BASE_URL_API+'/api/fire/geo/point',
        geoJsonStorePolygonSensor:import.meta.env.VITE_BASE_URL_API+'/api/sensor/geo/polygon',
        geoJsonStorePointSensor:import.meta.env.VITE_BASE_URL_API+'/api/sensor/geo/point',
        geoJsonStoreTrucks:import.meta.env.VITE_BASE_URL_API+'/api/truck/geo/point',
    }),
    getters: {
        getGeoJsonPolygonFires: (state):string =>{ return state.geoJsonStorePolygonFire},
        getGeoJsonPointFires: (state):string =>{ return state.geoJsonStorePointFire},
        getGeoJsonPolygonSensors: (state):string =>{ return state.geoJsonStorePolygonSensor},
        getGeoJsonPointSensors: (state):string =>{ return state.geoJsonStorePointSensor},
        getGeoJsonTrucks: (state):string =>{ return state.geoJsonStoreTrucks},
    },
    actions:{
    }
})