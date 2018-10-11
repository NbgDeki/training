import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddWorkout from '../components/AddWorkout.vue'
import EditWorkout from '../components/EditWorkout.vue'

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
    },
    {
      path: '/edit-workout/:workout_slug',
      name: 'EditWorkout',
      component: EditWorkout
    }
  ]
})
