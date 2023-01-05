<script lang="ts">
import {inject, ref} from 'vue'
import { defineComponent } from 'vue'

import stationIcon from '@/assets/icone/fire-station.png'
import { useGeoJsonStore } from '@/stores/geoJsonStore'
import { useSensorStore } from '@/stores/sensorStore'

export default defineComponent({

  setup() {
    const center = ref([4.869733536816722,45.783726561289825])
    const projection = ref('EPSG:4326')
    const zoom = ref(16)
    const rotation = ref(0)

    const radius = ref(180)

    const format = inject('ol-format');
    const geoJson = new format.GeoJSON();

    const geoJsonStore = useGeoJsonStore()
    const sensorLocalisation:string = geoJsonStore.getGeoJsonPolygonSensors
    const sensorStore = useSensorStore()


    const actionOnSelect = (event:any) => {
      const selectedId = event.selected[0].values_.id
      sensorStore.addSensor(selectedId)
    }

    const filterSelection = (feature:any) =>{
      return feature.values_.type == "SENSOR";
    }

    return {
      center,
      projection,
      zoom,
      rotation,
      geoJson,
      sensorLocalisation,
      stationIcon,
      actionOnSelect,
      filterSelection,
      radius
    }
  },
})

</script>

<template>
  <!-- <PointSelection :actionOnSelect="actionOnSelect" :filterSelection="filterSelection" :markerIcon="stationIcon"/> -->
  <ol-vector-layer>
    <ol-source-vector :url="sensorLocalisation" :format="geoJson" :projection="projection">
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