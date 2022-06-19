import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayView from '@/views/PlayView'
import VocView from '@/views/VocView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Voc',
    name: 'voclearning',
    component: VocView
  },
  {
    path: '/play',
    name: 'playVoc',
    component: PlayView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
