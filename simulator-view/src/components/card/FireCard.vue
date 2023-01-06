  
<script lang="ts">
import { defineComponent, toRef, ref } from 'vue'
import type { Ref } from 'vue'
import type { PropType } from 'vue'
import type { Fire } from '@/models/Fire'
import { useFireStore } from '@/stores/fireStore'

  export default defineComponent({
    props: {
      data: { 
        type: Object as PropType<Fire>, 
        required: true
      },
    },
   setup(props){
    const fire = toRef(props,"data")
    const fireStore = useFireStore()

    const isSliderDisable:Ref<boolean> = ref(true)

    function deleteFire(){
      if(isSliderDisable.value){
        fireStore.deleteFireFromDB(fire.value.id)
      }
    }

    function updateFire(){
      if(isSliderDisable.value){
        isSliderDisable.value = false
      }else{ 
        fireStore.updateFire(fire.value)
        isSliderDisable.value = true
      }
    }


    return{
        fire,
        isSliderDisable,
        updateFire,
        deleteFire
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

      <v-container>
        <v-row>
          <v-col>
            Longitude :
            <v-text-field
              v-model="fire.longitude"
              hide-details
              variant="outlined"
              type="number"
              step="0.000001"
              :disabled="isSliderDisable"
            ></v-text-field>
          </v-col>

          <v-col>
            Latitude :
            <v-text-field
              v-model="fire.latitude"
              hide-details
              type="number"
              step="0.000001"
              variant="outlined"
              :disabled="isSliderDisable"
            ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-slider
            v-model="fire.intensity"
            :step="1"
            label="Intensité"
            hide-details
            :disabled="isSliderDisable"
            class="ma-4"
          >
            <template v-slot:append>
              <v-text-field
                v-model="fire.intensity"
                type="number"
                style="width: 80px"
                density="compact"
                hide-details
                variant="outlined"
                :max="20"
                :min="0"
                :disabled="isSliderDisable"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="updateFire">{{isSliderDisable ? "Modifier" : "Valider"}}</v-btn>
        </v-col>
        <v-col>
          <v-btn :disabled="!isSliderDisable" @click="deleteFire">Supprimer</v-btn>
        </v-col>
      </v-row>
    </v-container>
    </v-expansion-panel-text>
  </v-expansion-panel>

</template>



