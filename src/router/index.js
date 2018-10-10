import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddWorkout from '../components/AddWorkout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-workout',
      name: 'AddWorkout',
      component: AddWorkout
    }
  ]
})
