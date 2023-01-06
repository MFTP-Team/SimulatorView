  
<script lang="ts">
import { defineComponent,ref, toRef  } from 'vue'
import type { PropType} from 'vue'
import type { Truck } from '@/models/Truck'

  export default defineComponent({
    props: {
      data: { 
        type: Object as PropType<Truck>, 
        required: true
      },
    },
   setup(props){
    const show = ref(false)
    const truck = toRef(props,"data")

    return{
      show,
      truck
    }
   },
})
</script>


<template>
  <v-expansion-panel>
      <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
        <v-icon icon="mdi-fire-truck"></v-icon>
        Camions n°{{truck.id}}
      </v-expansion-panel-title>
      
      <v-expansion-panel-text>
        <div>
          <v-btn style="float:right;" prepend-icon="mdi-close" variant="plain"></v-btn>
        </div>

        <div>
        Latitude: {{ truck.latitude }} Longitude : {{ truck.longitude }}
        </div>

        <div>
          Power : {{ truck.power}}
        </div>

        <div>
          <v-btn>Modifier</v-btn>
          <v-btn>Supprimer</v-btn>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
</template>



