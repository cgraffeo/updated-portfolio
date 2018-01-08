import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout.vue'
// import Faq from './components/Faq.vue'
// import Tos from './components/Tos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout
    }
    // {
    //   path: '/FAQ',
    //   name: 'faq',
    //   component: Faq
    // },
    // {
    //   path: '/TOS',
    //   name: 'tos',
    //   component: Tos
    // }
  ]
})
