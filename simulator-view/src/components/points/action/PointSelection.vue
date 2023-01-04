<script lang="ts">
import {inject, toRef} from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({

  props: {
    actionOnSelect: Function,
    filterSelection: Function,
    markerIcon:String
  },
  setup(props) {

    const selectConditions = inject('ol-selectconditions')
    const selectCondition = selectConditions.click

    const propsAction = toRef(props,'actionOnSelect')
    const filter = toRef(props,'filterSelection')
    const icon = toRef(props,'markerIcon')

    return {
        selectCondition,
        propsAction,
        filter,
        icon
    }
  },
})

</script>

<template>
    <ol-interaction-select @select.stop="propsAction" :condition="selectCondition" :filter="filter">
    <ol-style>
      <ol-style-icon :src="icon" :scale="0.2"></ol-style-icon>
    </ol-style>
  </ol-interaction-select>
</template>