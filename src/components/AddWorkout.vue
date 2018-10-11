<template>
    <div class="add-workout container">
        <h2 class="center-align black-text">Dodaj Novi Trening</h2>
        <form @submit.prevent="addWorkout">
            <div class="field title">
                <label for="title">Naziv Treninga:</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div v-for="(exercise, index) in exercises" :key="index" class="field">
                <label for="exercise">Vezba:</label>
                <input type="text" name="exercise" v-model="exercises[index]">
                <i class="material-icons delete" @click="deleteExe(exercise)">delete</i>
            </div>
            <div class="field add-exercise">
                <label for="add-exercise">Dodaj vezbu (pritiskom na TAB):</label>
                <input @keydown.tab.prevent="addExe" v-model="another" type="text" name="add-exercise">
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="red-text center"> {{feedback}} </p>
                <button class="btn amber darken-4">Dodaj Trening</button>
            </div>
        </form>
    </div>
</template>

<script>

import db from '../firebase/init.js'
import slugify from 'slugify'

export default {
    name: 'AddWorkout',
    data(){
        return{
            title: null,
            another: null,
            exercises: [],
            feedback: null,
            slug: null
        }
    },
    methods:{
        addWorkout(){
            if(this.title){
                this.feedback = null
                // pravljenje slug-a
                this.slug = slugify(this.title,{
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('exercises').add({
                    title: this.title,
                    exercises: this.exercises,
                    slug: this.slug
                }).then(()=>{
                   this.$router.push({name: 'Index'}) 
                }).catch((err)=>{
                    console.log(err)
                })   
            }else{
                this.feedback = 'Morate uneti naziv treninga'
            }
        },
        addExe(){
           if(this.another){
               this.exercises.push(this.another)
               this.another = null
               this.feedback = null
           }else{
               this.feedback = 'Morate uneti naziv vezbe'
           }
        },
        deleteExe(exercise){
            this.exercises = this.exercises.filter((exe)=>{
                return exe != exercise
            })
        }
    }
}
</script>

<style lang="scss">
    .add-workout{
        margin-top: 60px;
        padding: 20px;
        max-width: 500px;
        h2{
            font-size: 2em;
            margin: 20px auto;
        }
        .field{
            margin: 20px auto;
            position: relative;
        }
        input{
            &:focus{
                border-bottom: 1px solid #ff6f00 !important;
                box-shadow: 0 1px 0 0 #ff6f00 !important;
            }
        }
        .delete{
            position: absolute;
            right: 0;
            bottom: 16px;
            color: #aaa;
            font-size: 1.4em;
        }
    }
</style>


