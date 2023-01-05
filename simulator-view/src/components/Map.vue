<script lang="ts">
import {ref} from 'vue'
import { defineComponent } from 'vue'
import FirePoint from './points/FirePoint.vue'
import SensorPoint from './points/SensorPoint.vue'
import SensorPolygon from './polygon/SensorPolygon.vue'
import TruckPoint from './points/TruckPoint.vue'


export default defineComponent({
  setup() {
    const center = ref([4.869733536816722,45.783726561289825])
    const projection = ref('EPSG:4326')
    const zoom = ref(16)
    const rotation = ref(0)

    return {
      center,
      projection,
      zoom,
      rotation,
    }
  },
})

</script>

<template>
  <div>
    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:100vh; widght:100%">

        <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" 
        :projection="projection" />

        <ol-tile-layer>
            <ol-source-osm />
        </ol-tile-layer>
        <SensorPolygon/>
        <SensorPoint/>
        <FirePoint/>
        <TruckPoint/>
    </ol-map>
  </div>
</template>