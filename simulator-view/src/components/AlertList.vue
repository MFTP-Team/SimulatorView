  
<script lang="ts">
import { defineComponent } from 'vue'
import { useAlertStore } from '@/stores/alertStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

  export default defineComponent({
    setup() {
        const alertStore = useAlertStore()
        const alertStoreRef = storeToRefs(alertStore)

        const alertArray = ref(alertStoreRef.alertArray)


    return{
      alertArray
    }
  }
})
</script>


<template>
        <v-list lines="one">
            <v-list-item
                v-for="alert in alertArray"
                :key="alert.id"
                :title="'Alerte n°' + alert.id"
                :subtitle="alert.date"
            >
                <v-container>
                    <v-row>
                        <v-col>Longitude :</v-col>
                        <v-col>{{ alert.longitude }}</v-col>
                    </v-row>
                    <v-row>
                        <v-col>Latitude :</v-col>
                        <v-col>{{ alert.latitude}}</v-col>
                    </v-row>
                    <v-row>
                        <v-col>Intensité :</v-col>
                        <v-col>{{alert.intensity}}</v-col>
                    </v-row>
                </v-container>
            </v-list-item>
        </v-list>
</template>
