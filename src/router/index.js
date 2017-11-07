import Vue from 'vue'
import Router from 'vue-router'

import AppView from '@/components/app-view'
import Home from '@/pages/home'

Vue.use(Router)

const page = name => () => import('@/pages/' + name)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '',
      component: AppView,
      children: [
        {path: '/', name: 'home', component: Home}
      ]
    },
    {path: '/login', name: 'login', component: page('login')}
  ]
})
