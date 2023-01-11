<script lang="ts">
import {ref} from 'vue'
import { defineComponent } from 'vue'
import { usePopUpStateStore } from '@/stores/popUpStateStore'
import { storeToRefs } from 'pinia'
import { useFireStore } from '@/stores/fireStore'
import { useSensorStore } from '@/stores/sensorStore'

export default defineComponent({
  setup() {
    const popUpStateStore = usePopUpStateStore()

    const storeRef = storeToRefs(popUpStateStore)
    const popUpState = ref(storeRef.popUpState)
    const popUpValue = ref(storeRef.popUpValue)
    const valueName = ref(storeRef.valueName)
    const maxValue = ref(storeRef.maxValue)
    const minValue = ref(storeRef.minValue)
    const coord = ref(storeRef.coordValue)
    
    function cancelButtonAction(){
        popUpStateStore.updatePopUpValue(0)
        popUpStateStore.closePopUp()
    }

    function addButtonAction(){
        popUpStateStore.closePopUp()
        if(valueName.value === "Intensite"){
            const fireStore = useFireStore()
            fireStore.addFireToBDD(coord.value[0],coord.value[1],popUpValue.value)
        }
        if(valueName.value === "Radius"){
            const sensorStore = useSensorStore()
            sensorStore.addSensorToBDD(coord.value[0],coord.value[1],popUpValue.value)
        }
    }

    return {
        popUpState,
        cancelButtonAction,
        addButtonAction,
        popUpValue,
        valueName,
        maxValue,
        minValue
    }
  }
})

</script>

<template>
  <div class="text-center">
    <v-dialog
      v-model="popUpState"
    >
    <v-card>
        <v-container>
            <v-row>
                <v-col>
                <v-slider
                    v-model="popUpValue"
                    :step="1"
                    :label="valueName"
                    hide-details
                    class="ma-4"
                >
                    <template v-slot:append>
                    <v-text-field
                        v-model="popUpValue"
                        type="number"
                        style="width: 80px"
                        density="compact"
                        hide-details
                        variant="outlined"
                        :max="maxValue"
                        :min="minValue"
                    ></v-text-field>
                    </template>
                </v-slider>
                </v-col>
            </v-row>
            <v-row>
                <v-col>    
                    <v-btn color="green" block @click="addButtonAction">Valider</v-btn>      
                </v-col>
                <v-col>
                    <v-btn color="red" block @click="cancelButtonAction">Annuler</v-btn> 
                </v-col>
            </v-row>
        </v-container>
    </v-card>
    </v-dialog>
</div>
</template>