import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import First from '../components/children/first.vue'
import Second from '../components/children/second.vue'
import Third from '../components/children/third.vue'
import Forth from '../components/children/forth.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'first',
          name: 'first',
          component: First
        }, {
          path: 'second',
          name: 'second',
          component: Second
        }, {
          path: 'third',
          name: 'third',
          component: Third
        }, {
          path: 'forth',
          name: 'forth',
          component: Forth
        }
      ]
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: First
        }
      ]
    }
  ]
})
