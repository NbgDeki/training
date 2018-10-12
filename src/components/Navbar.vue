<template>
    <div class="navbar">
        <nav class="nav-extended black">
            <div class="nav-content">
                <router-link :to="{name: 'Index'}">
                    <span class="nav-title">Dnevnik Treninga</span>
                </router-link>
                <a href="" class="add btn-floating btn-large halfway-fab amber darken-4">
                    <router-link :to="{name: 'AddWorkout'}">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss">
    .navbar{
        nav{
            padding: 0 20px;
        }
    }
</style>


