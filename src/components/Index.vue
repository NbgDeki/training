<template>
  <div class="index container">
    <div class="card" v-for="training in trainings" :key="training.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteTraining(training.id)">delete</i>
        <h2 class="blue-text"> {{training.title}} </h2>
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
export default {
  name: 'Index',
  data () {
    return {
      trainings:[
        {title: 'Grudi 9.10.2018', slug: 'grudi-9-10-2018', exercises: ['Ravni bench', 'Kosi bench', 'Propadanja'], id: '1'},
        {title: 'Ledja 11.10.2018', slug: 'ledja-11-10-2018', exercises: ['Zgibovi', 'Veslanje u pretklonu', 'Mrtvo dizanje'], id: '2'}
      ]
    }
  },
  methods:{
    // brisanje treninga
    deleteTraining(id){
      this.trainings = this.trainings.filter((training)=>{
        return training.id != id
      })
    }
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
  }
</style>

