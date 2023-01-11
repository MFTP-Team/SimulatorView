import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AlertList from '../views/AlertListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/alert',
      name: 'alert-list',
      component: AlertList
    },
  ]
})

export default router
