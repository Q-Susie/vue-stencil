import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/home/index.vue'
import Login from '../views/login/login.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
