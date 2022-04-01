import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
import PokemonsDetails from '../views/PokemonsDetails.vue'
import PokemonQuiz from '../views/PokemonQuiz.vue'

Vue.use(VueRouter)
//path permet creer nouvelles pages
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo,
  },
  {
    path: '/pokemons/:id',
    name: 'Pokemon',
    component: PokemonsDetails,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/PokemonQuiz',
    name: 'Pokemon quiz',
    component: PokemonQuiz,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
