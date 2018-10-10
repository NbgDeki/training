<template>
    <div class="add-workout container">
        <h2 class="center-align black-text">Dodaj Novi Trening</h2>
        <form @submit.prevent="addWorkout">
            <div class="field title">
                <label for="title">Naziv Treninga:</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div class="field add-exercise">
                <label for="add-exercise">Dodaj vezbu:</label>
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
export default {
    name: 'AddTraining',
    data(){
        return{
            title: null,
            another: null,
            exercises: [],
            feedback: null
        }
    },
    methods:{
        addWorkout(){
            console.log(this.title, this.exercises)
        },
        addExe(){
           if(this.another){
               this.exercises.push(this.another)
               this.another = null
               this.feedback = null
           }else{
               this.feedback = 'Morate uneti naziv vezbe'
           }
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
        }
        input{
            &:focus{
                border-bottom: 1px solid #ff6f00 !important;
                box-shadow: 0 1px 0 0 #ff6f00 !important;
            }
        }
    }
</style>


