  
<script lang="ts">
import type { Station } from '@/models/Station'
import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'

  export default defineComponent({
    props: {
      data: { 
        type: Object as PropType<Station>, 
        required: true
      },
    },
   setup(props){
    const show = ref(false)

    return{
        show
    }
   },
})
</script>


<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Caserne_Larchambaudie.JPG"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Caserne
    </v-card-title>

    <v-card-subtitle>
        C'est le repos
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          REPOS REPOS REPOS REPOS
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>



