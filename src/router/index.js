import { createRouter, createWebHistory } from 'vue-router'
// vue-router简单版
// import { createRouter, createWebHashHistory } from './grouter/index'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: [
//         {
//           path: '/',
//           name: 'Home',
//           component: Home
//         },
//         {
//           path: '/about',
//           name: 'About',
//           component: About
//         }
//       ]
// })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
