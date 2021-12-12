// All Imports
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Details from '../views/MovieDetails.vue'

// Using Router as Vue instance
Vue.use(VueRouter)


// Defining Vue Routes
const routes = [
  {
    path: '/app',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
]

// Router Instance
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
