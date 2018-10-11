<template>
    <div v-if="workout" class="edit-workout container">
        <h2>Azuriraj {{workout.title}}</h2>
        <form @submit.prevent="editWorkout">
            <div class="field title">
                <label for="title">Naziv Treninga:</label>
                <input type="text" name="title" v-model="workout.title">
            </div>
            <div v-for="(exercise, index) in workout.exercises" :key="index" class="field">
                <label for="exercise">Vezba:</label>
                <input type="text" name="exercise" v-model="workout.exercises[index]">
                <i class="material-icons delete" @click="deleteExe(exercise)">delete</i>
            </div>
            <div class="field add-exercise">
                <label for="add-exercise">Dodaj vezbu:</label>
                <input @keydown.tab.prevent="addExe" v-model="another" type="text" name="add-exercise">
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="red-text center"> {{feedback}} </p>
                <button class="btn amber darken-4">Azuriraj Trening</button>
            </div>
        </form>
    </div>
</template>

<script>

import db from '../firebase/init.js'
import slugify from 'slugify'

export default {
    name: 'EditWorkout',
    data(){
        return{
            workout: null,
            another: null,
            feedback: null
        }
    },
    methods:{
        editWorkout(){
            if(this.workout.title){
                this.feedback = null
                // pravljenje slug-a
                this.workout.slug = slugify(this.workout.title,{
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('exercises').doc(this.workout.id).update({
                    title: this.workout.title,
                    exercises: this.workout.exercises,
                    slug: this.workout.slug
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
               this.workout.exercises.push(this.another)
               this.another = null
               this.feedback = null
           }else{
               this.feedback = 'Morate uneti naziv vezbe'
           }
        },
        deleteExe(exercise){
            this.workout.exercises = this.workout.exercises.filter((exe)=>{
                return exe != exercise
            })
        }
    },
    created(){
        let ref = db.collection('exercises').where('slug','==', this.$route.params.workout_slug)
        ref.get().then((snapshot)=>{
            snapshot.forEach(doc=>{
                this.workout = doc.data()
                this.workout.id = doc.id
            })
        })
    }
}
</script>

<style lang="scss">
    .edit-workout{
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


