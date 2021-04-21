import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile'),
    beforeEnter: (to, from, next) => {
      let user;
      if (localStorage.getItem('user')) {
        try {
          user = JSON.parse(localStorage.getItem('user'));
        } catch(e) {
          localStorage.removeItem('user');
        }
      }
      if(!user.isAuth) {
        next({ name: 'Authorization' })
      }
      else {
        next()
      }
    }
  },
  {
    path: '/authorization',
    name: 'Authorization',
    component: () => import('../views/Authorization')
  },
  { path: '/', redirect: '/news' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
