<script setup lang="ts">
import Map from '../components/Map.vue'
import Drawer from'../components/Drawer.vue'
</script>

<template>
  <v-app>
    <Drawer></Drawer>
    <v-main style="height: 100vh">
      <Map></Map>
    </v-main>
  </v-app>
</template>
