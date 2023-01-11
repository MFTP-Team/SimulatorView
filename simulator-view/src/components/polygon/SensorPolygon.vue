<script lang="ts">
import {inject, ref} from 'vue'
import { defineComponent } from 'vue'
import { useGeoJsonStore } from '@/stores/geoJsonStore'


export default defineComponent({

  setup() {
    const projection = ref('EPSG:4326')
    const format = inject('ol-format');
    const geoJson = new format.GeoJSON();

    const strategy = inject('ol-loadingstrategy');
    const bbox = strategy.bbox;

    const geoJsonStore = useGeoJsonStore()
    const sensorLocalisation:string = geoJsonStore.getGeoJsonPolygonSensors

    return {
      projection,
      geoJson,
      sensorLocalisation,
      bbox
    }
  },
})

</script>

<template>
  <ol-vector-layer>
    <ol-source-vector :url="sensorLocalisation" :format="geoJson" :strategy="bbox" :projection="projection">
      <ol-feature>
        <ol-geom-polygon></ol-geom-polygon>
      </ol-feature>
    </ol-source-vector>
    <ol-style>
      <ol-style-stroke color="black" :width="5" ></ol-style-stroke>
      <ol-style-fill :color="`rgba(161, 146, 154, 0.4)`"></ol-style-fill>
    </ol-style>
  </ol-vector-layer>

</template>