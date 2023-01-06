  
<script lang="ts">
import type { Sensor } from '@/models/Sensor'
import { defineComponent, ref, toRef } from 'vue'
import type { PropType } from 'vue'

  export default defineComponent({
    props: {
      data: { 
        type: Object as PropType<Sensor>, 
        required: true
      },
    },
   setup(props){
    const show = ref(false)
    const sensor = toRef(props,"data")

    return{
        show,
        sensor
    }
   },
})
</script>


<template>
  <v-expansion-panel>
    <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
      <v-icon icon="mdi-access-point"></v-icon>
      Capteur n°{{sensor.id}}
    </v-expansion-panel-title>
    
    <v-expansion-panel-text>
      <div>
        <v-btn style="float:right;" prepend-icon="mdi-close" variant="plain"></v-btn>
      </div>

      <div>
       Latitude: {{ sensor.latitude }} Longitude : {{ sensor.longitude }}
      </div>

      <div>
        Radius : {{ sensor.radius }}
      </div>

      <div>
        <v-btn>Modifier</v-btn>
        <v-btn>Supprimer</v-btn>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>



