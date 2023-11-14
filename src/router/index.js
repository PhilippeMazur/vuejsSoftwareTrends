import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditComponent from '../components/EditComponent.vue'
import CafesView from '../views/CafesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cafes',
      props: true,
      name: 'cafes',
      component: CafesView
    }
  ]
})

export default router
