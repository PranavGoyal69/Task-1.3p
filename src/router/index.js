import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: () => import('../views/Aboutme.vue')
    },
    {
      path: '/Intro',
      name: 'Intro',
      component: () => import('../views/Intro.vue')
    },
    {
      path: '/Work',
      name: 'Work',
      component: () => import('../views/Work.vue')
    },
    {
      path: '/MyProjects',
      name: 'MyProjects',
      component: () => import('../views/MyProjects.vue')
    },
    {
      path: '/Hobbies',
      name: 'Hobbies',
      component: () => import('../views/Hobbies.vue')
    },
  ]
})

export default router
