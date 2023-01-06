  
<script lang="ts">
import { defineComponent,ref, toRef  } from 'vue'
import type { Ref } from 'vue'
import type { PropType} from 'vue'
import type { Truck } from '@/models/Truck'
import { useTruckStore } from '@/stores/truckStore'

  export default defineComponent({
    props: {
      data: { 
        type: Object as PropType<Truck>, 
        required: true
      },
    },
    setup(props){
    const truck = toRef(props,"data")
    const truckStore = useTruckStore()

    const isSliderDisable:Ref<boolean> = ref(true)

    function deleteTruck(){
      if(isSliderDisable.value){
        truckStore.deleteTruckFromDB(truck.value.id)
      }
    }

    function updateTruck(){
      if(isSliderDisable.value){
        isSliderDisable.value = false
      }else{ 
        truckStore.updateTruck(truck.value)
        isSliderDisable.value = true
      }
    }


    return{
        truck,
        isSliderDisable,
        updateTruck,
        deleteTruck
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

        <v-container>
          <v-row>
            <v-col>
              Longitude :
              <v-text-field
                v-model="truck.longitude"
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
                v-model="truck.latitude"
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
              v-model="truck.power"
              :step="5"
              label="Radius"
              hide-details
              :disabled="isSliderDisable"
              class="ma-4"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="truck.power"
                  type="number"
                  style="width: 80px"
                  density="compact"
                  hide-details
                  variant="outlined"
                  :max="10"
                  :min="0"
                  :disabled="isSliderDisable"
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="updateTruck">{{isSliderDisable ? "Modifier" : "Valider"}}</v-btn>
          </v-col>
          <v-col>
            <v-btn :disabled="!isSliderDisable" @click="deleteTruck">Supprimer</v-btn>
          </v-col>
        </v-row>
      </v-container>
      </v-expansion-panel-text>
    </v-expansion-panel>
</template>



