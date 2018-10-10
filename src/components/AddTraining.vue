<template>
    <div class="add-training container">
        <h2 class="center-align black-text">Dodaj Novi Trening</h2>
        <form @submit.prevent="AddTraining">
            <div class="field title">
                <label for="title">Naziv Treninga:</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div class="field add-exercise">
                <label for="add-exercise">Dodaj vezbu:</label>
                <input type="text" name="add-exercise">
            </div>
            <div class="field center-align">
                <button class="btn amber darken-4">Dodaj Trening:</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddTraining',
    data(){
        return{
            title: null
        }
    },
    methods:{
        AddTraining(){
            console.log(this.title)
        }
    }
}
</script>

<style lang="scss">
    .add-training{
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


