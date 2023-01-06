  
<script lang="ts">
import type { Sensor } from '@/models/Sensor'
import { defineComponent, ref, toRef } from 'vue'
import type {Ref} from 'vue'
import type { PropType } from 'vue'
import { useSensorStore } from '@/stores/sensorStore'

  export default defineComponent({
    props: {
      data: { 
        type: Object as PropType<Sensor>, 
        required: true
      },
    },
   setup(props){
    const sensor = toRef(props,"data")
    const sensorStore = useSensorStore()

    const isSliderDisable:Ref<boolean> = ref(true)

    function deleteSensor(){
      if(isSliderDisable.value){
        sensorStore.deleteSensorFromDB(sensor.value.id)
      }
    }

    function updateSensor(){
      if(isSliderDisable.value){
        isSliderDisable.value = false
      }else{ 
        sensorStore.updateSensor(sensor.value)
        isSliderDisable.value = true
      }
    }

    

    return{
      isSliderDisable,
      sensor,
      updateSensor,
      deleteSensor
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

      <v-container>
        <v-row>
          <v-col>
            Longitude :
            <v-text-field
              v-model="sensor.longitude"
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
              v-model="sensor.latitude"
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
            v-model="sensor.radius"
            :step="5"
            label="Radius"
            hide-details
            :disabled="isSliderDisable"
            class="ma-4"
          >
            <template v-slot:append>
              <v-text-field
                v-model="sensor.radius"
                type="number"
                style="width: 80px"
                density="compact"
                hide-details
                variant="outlined"
                :max="100"
                :min="0"
                :disabled="isSliderDisable"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="updateSensor">{{isSliderDisable ? "Modifier" : "Valider"}}</v-btn>
        </v-col>
        <v-col>
          <v-btn :disabled="!isSliderDisable" @click="deleteSensor">Supprimer</v-btn>
        </v-col>
      </v-row>
    </v-container>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>



