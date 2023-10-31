//Import components
import { createRouter, createWebHistory } from 'vue-router'
import Home from 'pages/Home.vue'
import Restaurant from 'pages/Restaurant.vue'
import Error from 'pages/Error.vue'

//Create routing
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/restaurant/:id',
      component: Restaurant,
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error,
    },
  ],
})
