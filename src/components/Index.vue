<template>
  <div class="index container">
    <div class="card" v-for="workout in workouts" :key="workout.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteWorkout(workout.id)">delete</i>
        <h2 class="black-text"> {{workout.title}} </h2>
        <ul class="exercises">
          <li v-for="(exercise, index) in workout.exercises" :key="index">
            <span class="chip"> {{exercise}} </span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab amber darken-4">
        <router-link :to="{name: 'EditWorkout', params: {workout_slug: workout.slug}}">
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>

import db from '../firebase/init.js'

export default {
  name: 'Index',
  data () {
    return {
      workouts: []
    }
  },
  methods:{
    // brisanje treninga
    deleteWorkout(id){
      db.collection('exercises').doc(id).delete().then(()=>{
        this.workouts = this.workouts.filter((workout)=>{
          return workout.id != id
        })
      })
    }
  },
  created(){
    // uzimanje podataka iz firestore-a
    db.collection('exercises').orderBy('title', 'asc').get().then(snapshot=>{
      snapshot.forEach(doc=>{
        let workout = doc.data()
        workout.id = doc.id
        this.workouts.push(workout)
      })
    })
  }
}
</script>

<style lang="scss">

</style>

