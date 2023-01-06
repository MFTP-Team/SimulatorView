import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import FirePoint from '@/components/points/FirePoint.vue'
import SensorPoint from '@/components/points/SensorPoint.vue'
import TruckPoint from '@/components/points/TruckPoint.vue'
import SensorPolygon from './components/polygon/SensorPolygon.vue'
import FirePolygon from './components/polygon/FirePolygon.vue'
import Map from '@/components/Map.vue'
import PointSelection from '@/components/points/action/PointSelection.vue'
import FireCard from './components/card/FireCard.vue'
import SensorCard from './components/card/SensorCard.vue'
import TruckCard from './components/card/TruckCard.vue'

import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
})

//import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.component('FirePoint',FirePoint)
app.component('SensorPoint',SensorPoint)

app.component('TruckPoint',TruckPoint)
app.component('SensorPolygon',SensorPolygon)
app.component('FirePolygon',FirePolygon)
app.component('PointSelection',PointSelection)

app.component('TruckCard',TruckCard)
app.component('FireCard',FireCard)
app.component('SensorCard',SensorCard)

app.component('Map',Map)
app.use(OpenLayersMap)

app.mount('#app')
