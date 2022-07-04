import { createRouter, createWebHistory } from 'vue-router'
import PlayView from '@/views/PlayView'
import VocView from '@/views/VocView'

const routes = [
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
