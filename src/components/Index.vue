<template>
  <div class="index container">
    <div class="card" v-for="training in trainings" :key="training.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteTraining(training.id)">delete</i>
        <h2 class="black-text"> {{training.title}} </h2>
        <ul class="exercises">
          <li v-for="(exercise, index) in training.exercises" :key="index">
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
      trainings:[]
    }
  },
  methods:{
    // brisanje treninga
    deleteTraining(id){
      db.collection('exercises').doc(id).delete().then(()=>{
        this.trainings = this.trainings.filter((training)=>{
          return training.id != id
        })
      })  
    }
  },
  created(){
    // uzimanje podataka iz firestore-a
    db.collection('exercises').get().then(snapshot=>{
      snapshot.forEach(doc=>{
        let training = doc.data()
        training.id = doc.id
        this.trainings.push(training)
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

