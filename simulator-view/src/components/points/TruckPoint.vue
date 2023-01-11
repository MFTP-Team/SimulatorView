<script lang="ts">
import {inject, ref} from 'vue'
import { defineComponent } from 'vue'

import truckIcon from '@/assets/icone/fire-truck-icon.svg'
import { useGeoJsonStore } from '@/stores/geoJsonStore'
import { useTruckStore } from '@/stores/truckStore'

import PointSelection from './action/PointSelection.vue'

export default defineComponent({

  setup() {
    const projection = ref('EPSG:4326')

    const format = inject('ol-format');
    const geoJson = new format.GeoJSON();

    const geoJsonStore = useGeoJsonStore()
    const trucksLocalisation:string = geoJsonStore.getGeoJsonTrucks
    const truckStore = useTruckStore()

    const strategy = inject('ol-loadingstrategy');
    const bbox = strategy.bbox;

    const actionOnSelect = (event:any) => {
      if(event.selected.length !== 0){
        const selectedId = event.selected[0].values_.id
        truckStore.addTruck(selectedId)
      }

    }

    const filterSelection = (feature:any) =>{
      return feature.values_.type == "TRUCK";
    }

    return {
      projection,
      geoJson,
      trucksLocalisation,
      truckIcon,
      actionOnSelect,
      filterSelection,
      bbox
    }
  },
})

</script>

<template>

  <PointSelection :actionOnSelect="actionOnSelect" :filterSelection="filterSelection" :markerIcon="truckIcon"/>

  <ol-vector-layer>
    <ol-source-vector :url="trucksLocalisation" :strategy="bbox" :format="geoJson" :projection="projection">
    </ol-source-vector>
    <ol-style>
      <ol-style-icon :src="truckIcon" :scale="0.05"></ol-style-icon>
    </ol-style>
  </ol-vector-layer>
</template>