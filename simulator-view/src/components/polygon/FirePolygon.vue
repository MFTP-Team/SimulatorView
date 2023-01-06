<script lang="ts">
import {inject, ref} from 'vue'
import { defineComponent } from 'vue'

import stationIcon from '@/assets/icone/fire-station.png'
import { useGeoJsonStore } from '@/stores/geoJsonStore'

export default defineComponent({

  setup() {
    const projection = ref('EPSG:4326')
    const format = inject('ol-format');
    const geoJson = new format.GeoJSON();

    const geoJsonStore = useGeoJsonStore()
    const fireLocalisation:string = geoJsonStore.getGeoJsonPolygonFires


    return {
      projection,
      geoJson,
      fireLocalisation,
      stationIcon,
    }
  },
})

</script>

<template>
  <ol-vector-layer>
    <ol-source-vector :url="fireLocalisation" :format="geoJson" :projection="projection">
      <ol-feature>
        <ol-geom-polygon></ol-geom-polygon>
      </ol-feature>
    </ol-source-vector>
    <ol-style>
      <ol-style-stroke color="red" :width="5" ></ol-style-stroke>
      <ol-style-fill :color="`rgba(226, 52, 20, 0.4)`"></ol-style-fill>
    </ol-style>
  </ol-vector-layer>

</template>