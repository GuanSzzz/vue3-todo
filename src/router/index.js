import { createRouter, createWebHistory } from 'vue-router'
// vue-router简单版
// import { createRouter, createWebHashHistory } from './grouter/index'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/login.vue'
import { getToken } from '@/utils/auth'
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
      path: '/', name: 'Home', component: Home,
      children: [
        { path: 'about', name: 'About', component: About }]
    },
    {    
      path: '/login',   
      name: 'Login',
      component: Login, 
    }
  ]
})


router.beforeEach((to,from,next)=> {
  let token=getToken()
  const {fullPath} =to
  if(fullPath==='/login') {
    next()
  }
  if(!token) {
    next('/login')
  }
  next()
})
export default router
