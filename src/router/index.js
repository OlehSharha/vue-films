import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage/Home-page.vue'
import FavoruitePage from '../components/FavoruitePage/Favoruite-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/favoruite',
      name: 'favoruite',
      component: FavoruitePage,
    }
  ]
})

export default router
