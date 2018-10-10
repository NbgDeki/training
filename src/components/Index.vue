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
    db.collection('exercises').get().then(snapshot=>{
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
  .index{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;
    h2{
      font-size: 1.8em;
      text-align: center;
      margin-top: 0;
      // font-weight: 700;
    }
    .exercises{
      margin: 30px auto;
    }
    .delete{
      position: absolute;
      top: 4px;
      right: 4px;
      cursor: pointer;
      color: #aaa;
      font-size: 1.4em;
    }
    .chip{
      height: auto;
      line-height: 2em;
    }
  }
</style>

