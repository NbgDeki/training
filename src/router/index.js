import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddTraining from '../components/AddTraining.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-training',
      name: 'AddTraining',
      component: AddTraining
    }
  ]
})
