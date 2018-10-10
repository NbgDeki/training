<template>
    <div class="navbar">
        <nav class="nav-extended blue lighten-1">
            <div class="nav-content">
                <router-link to="">
                    <span class="nav-title">Dnevnik Treninga</span>
                </router-link>
                <a href="" class="btn-floating btn-large halfway-fab blue darken-4">
                    <router-link to="">
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


