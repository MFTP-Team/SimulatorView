<script lang="ts">
import { defineComponent } from 'vue'
import AlertList from '@/components/AlertList.vue';
import { useAlertStore } from '@/stores/alertStore';

export default defineComponent({
    setup() {
    },
    beforeRouteEnter(to, from, next) {
        const alertStore = useAlertStore();
        alertStore.getAlerts()
        next();                
    }
})
</script>

<template>
  <v-app>
    <v-main>
        <AlertList></AlertList>
    </v-main>
  </v-app>
</template>
