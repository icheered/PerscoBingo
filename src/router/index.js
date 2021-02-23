import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

const routes = [
  { path: '/', name: 'home', component: Home }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router






