<script lang="ts">
import Map from '../components/Map.vue'
import Drawer from'../components/Drawer.vue'
import PopUp from '../components/PopUp.vue';
import { defineComponent } from 'vue'
import { usePopUpStateStore} from '@/stores/popUpStateStore';
import { storeToRefs } from 'pinia';
import {ref} from 'vue';

export default defineComponent({
    setup() {
      const popUpStateStore = usePopUpStateStore()
      const popUpRefStore = storeToRefs(popUpStateStore)
      const popUpState = ref(popUpRefStore.getPopUpState)

    return{
      popUpState

    }
  }
})
</script>

<template>
  <v-app>
    <PopUp v-if="popUpState"></PopUp>
    <Drawer></Drawer>
    <v-main style="height: 100vh">
      <Map></Map>
    </v-main>
  </v-app>
</template>
