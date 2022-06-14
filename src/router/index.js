import { createRouter, createWebHistory } from 'vue-router'
import PokemonIndexView from '../views/PokemonIndexView.vue'
import PokemonDetailsView from '../views/PokemonDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'pokemon-index',
    component: PokemonIndexView 
  },
  {
    path: '/pokemon-detail/:pokeId',
    name: 'pokemon-detail',
    component: PokemonDetailsView
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
