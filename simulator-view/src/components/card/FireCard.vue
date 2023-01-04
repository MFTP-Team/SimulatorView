  
<script lang="ts">
import { defineComponent, toRef,ref,  } from 'vue'
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
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Fire_in_Ranua.JPG/1200px-Fire_in_Ranua.JPG"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Fire
    </v-card-title>

    <v-card-subtitle>
      C CHO
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
          CHO CHO CHO CHO CHO
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>



