  
<script lang="ts">
import { defineComponent, toRef, ref } from 'vue'
import type { PropType } from 'vue'
import type { Fire } from '@/models/Fire'

  export default defineComponent({
    props: {
      data: { 
        type: Object as PropType<Fire>, 
        required: true
      },
    },
   setup(props){
    const show = ref(false)
    const fire = toRef(props,"data")

    return{
        show,
        fire
    }
   },
})
</script>


<template>
  <v-expansion-panel>
    <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
      <v-icon icon="mdi-fire"></v-icon>
      Feux n°{{fire.id}}
    </v-expansion-panel-title>
    
    <v-expansion-panel-text>
      <div>
        <v-btn style="float:right;" prepend-icon="mdi-close" variant="plain"></v-btn>
      </div>

      <div>
       Latitude: {{ fire.latitude }} Longitude : {{ fire.latitude }}
      </div>

      <div>
        Intensité : {{ fire.intensity }}
      </div>

      <div>
        <v-btn>Modifier</v-btn>
        <v-btn>Supprimer</v-btn>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>

</template>



