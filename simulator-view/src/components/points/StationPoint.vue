<script lang="ts">
import {inject, ref} from 'vue'
import { defineComponent } from 'vue'

import stationIcon from '@/assets/icone/fire-station.png'
import { useGeoJsonStore } from '@/stores/geoJsonStore'
import { useStationStore } from '@/stores/stationStore'

export default defineComponent({

  setup() {
    const center = ref([4.869733536816722,45.783726561289825])
    const projection = ref('EPSG:4326')
    const zoom = ref(16)
    const rotation = ref(0)

    const format = inject('ol-format');
    const geoJson = new format.GeoJSON();

    const geoJsonStore = useGeoJsonStore()
    const stationLocalisation:string = geoJsonStore.getGeoJsonStations
    const stationStore = useStationStore()


    const actionOnSelect = (event:any) => {
      const selectedId = event.selected[0].values_.id
      stationStore.addStation(selectedId)
    }

    const filterSelection = (feature:any) =>{
      return feature.values_.type == "STATION";
    }
    

    return {
      center,
      projection,
      zoom,
      rotation,
      geoJson,
      stationLocalisation,
      stationIcon,
      actionOnSelect,
      filterSelection
    }
  },
})

</script>

<template>
  <PointSelection :actionOnSelect="actionOnSelect" :filterSelection="filterSelection" :markerIcon="stationIcon"/>

  <ol-vector-layer>
    <ol-source-vector :url="stationLocalisation" :format="geoJson" :projection="projection">
    </ol-source-vector>
    <ol-style>
      <ol-style-icon :src="stationIcon" :scale="0.1"></ol-style-icon>
    </ol-style>
  </ol-vector-layer>
</template>