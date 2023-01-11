<script lang="ts">
import {ref,inject} from 'vue'
import type {Ref} from 'vue' 
import { defineComponent } from 'vue'
import FirePoint from './points/FirePoint.vue'
import FirePolygon from './polygon/FirePolygon.vue'
import SensorPoint from './points/SensorPoint.vue'
import SensorPolygon from './polygon/SensorPolygon.vue'
import TruckPoint from './points/TruckPoint.vue'
import sensorIcon from '@/assets/icone/sensor-icon.svg'
import fireIcon from '@/assets/icone/fire-icon.svg'
import truckIcon from '@/assets/icone/fire-truck-icon.svg'
import { usePopUpStateStore } from '@/stores/popUpStateStore'
import { useAlertStore } from '@/stores/alertStore'
import { storeToRefs } from 'pinia'

export default defineComponent({
    setup() {
        const center = ref([4.869733536816722, 45.783726561289825]);
        const projection = ref("EPSG:4326");
        const zoom = ref(16);
        const rotation = ref(0);
        
        const contextMenuItems:Ref<Object[]> = ref([])
        const popUpStateStore = usePopUpStateStore()

        const alertStore = useAlertStore()
        const alertStoreRef = storeToRefs(alertStore)
        const alertStoreSizeArray = ref(alertStoreRef.alertArray.value.length)

        contextMenuItems.value = [{
            text: 'Ajouter feu',
            icon: fireIcon,
            callback: (val:any) => {
                popUpStateStore.setMaxValue(20)
                popUpStateStore.setMinValue(1)
                popUpStateStore.setValueName("Intensite")
                popUpStateStore.setCoord(val.coordinate)
                popUpStateStore.openPopUp()   

            } // `center` is your callback function
        },
        {
            text: 'Ajouter capteur',
            icon: sensorIcon, 
            callback: (val:any) => {
                popUpStateStore.setMaxValue(100)
                popUpStateStore.setMinValue(1)
                popUpStateStore.setValueName("Radius")
                popUpStateStore.setCoord(val.coordinate)
                popUpStateStore.openPopUp()   
            }
        },
        {
            text: 'Ajouter camion',
            icon: truckIcon,
            callback: (val:any) => {
                popUpStateStore.setMaxValue(10)
                popUpStateStore.setMinValue(1)
                popUpStateStore.setValueName("Puissance")
                popUpStateStore.setCoord(val.coordinate)
                popUpStateStore.openPopUp()   
            }
        },
            '-' // this is a separator
    ]



    return {
        center,
        projection,
        zoom,
        rotation,
        contextMenuItems,
        fireIcon,
        alertStoreSizeArray,
    };

    },
})

</script>

<template>
  <div>
    <router-link to="/alert" custom v-slot="{ navigate }">
        <v-badge floating id="overlayMenu" :content="alertStoreSizeArray" @click="navigate" >
            <v-icon icon="mdi-alert-circle" size="x-large"></v-icon>    
        </v-badge>
    </router-link>  
    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:100vh; widght:100%" ref="map">

        <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" 
        :projection="projection" />

        <ol-tile-layer>
            <ol-source-osm />
        </ol-tile-layer>

        <ol-context-menu :items="contextMenuItems" />
        <!-- <ol-vector-layer>
            <ol-source-vector ref="markers"></ol-source-vector>
            <ol-style>
                <ol-style-icon :src="fireIcon" :scale="0.1"></ol-style-icon>
            </ol-style>
        </ol-vector-layer> -->

        <SensorPolygon/>
        <SensorPoint/>
        <FirePolygon/>
        <FirePoint/>
        <TruckPoint/>
    </ol-map>
  </div>
</template>

<style scoped>
#overlayMenu {
    position: absolute;
    z-index: 1;
    top: 50px;
    right: 50px;
}

</style>