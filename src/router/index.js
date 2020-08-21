import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  }
]

let frqrRoutes = routes;
const prefix = '/microFrqr';
if (window.__POWERED_BY_QIANKUN__) {
  frqrRoutes = routes.map(route => {
    let path = route.path
    return {
      ...route,
      path: prefix + path
    }
  })
}
const router = new VueRouter({
  mode: 'hash',
  routes: frqrRoutes
})


router.beforeEach((to, from, next) => {
  if (window.__POWERED_BY_QIANKUN__) {
    if (!to.path.startsWith(prefix)) {
      next({
        path: prefix + to.path
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router