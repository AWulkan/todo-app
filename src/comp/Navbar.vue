<template>
    <nav class="navbar is-white">
        <div class="container">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">
                    <span class="subtitle is-4">TODO</span>
                    <!-- <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"> -->
                </router-link>

                <div @click="toggleNavMenu" class="navbar-burger burger" :class="{'is-active': navMenuActive}">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="navbar-menu" :class="{'is-active': navMenuActive}">
                <div class="navbar-end">
                    <router-link to="todos" class="navbar-item">My Todos</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {
            navMenuActive: false
        }
    },
    methods: {
        toggleNavMenu() {
            this.navMenuActive = !this.navMenuActive;
        }
    }
}
</script>

<style scoped>
.navbar.is-white {
    border-bottom: 1px solid #ddd;
}
</style>
