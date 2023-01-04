  
<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import FireCard from './card/FireCard.vue'
import StationCard from './card/StationCard.vue'
import TruckCard from './card/TruckCard.vue'

import { useFireStore } from '@/stores/fireStore'
import { useStationStore } from '@/stores/stationStore'
import { useTruckStore } from '@/stores/truckStore'

import { storeToRefs } from 'pinia'

  export default defineComponent({
   setup(){

    const drawer = ref(true)
    const mini = ref(true)
    const rail = ref(true)

    const fireStore = useFireStore()
    const stationStore = useStationStore()
    const truckStore = useTruckStore()

    const refFireStore = storeToRefs(fireStore)
    const refStationStore = storeToRefs(stationStore)
    const refTruckStore = storeToRefs(truckStore)

    const firesArray =ref(refFireStore.fireArray)
    const stationsArray = ref(refStationStore.stationArray)
    const trucksArray = ref(refTruckStore.truckArray)

    return{
        firesArray,
        stationsArray,
        trucksArray,
        drawer,
        mini,
        rail
    }
   },
})
</script>


<template>
 <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          title="Emergency Manager"
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-fire" title="Feux"></v-list-item>
            <v-list-item 
                v-for="fire in firesArray"
            >
                <FireCard :data="fire"></FireCard>
            </v-list-item>

            <v-list-item prepend-icon="mdi-fire-truck" title="Camions"></v-list-item>  
            <v-list-item 
                v-for="truck in trucksArray"
            >
                <TruckCard :data="truck"></TruckCard>
            </v-list-item>

            <v-list-item prepend-icon="mdi-shield-home" title="Casernes"></v-list-item>
            <v-list-item 
                prepend-icon=""
                v-for="station in stationsArray"
            >
                <StationCard :data="station"></StationCard>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>


