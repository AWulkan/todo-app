<template>
<div id="home" class="adjust-for-navbar">
    <section class="hero is-fullheight is-light is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns">
                    <div class="column is-half is-offset-one-quarter">
                        <div v-if="session.token !== ''">
                            <h2 class="title">Welcome {{ session.username }}!</h2>
                            <h3 class="subtitle">You are logged in.</h3>
                            <a @click="goToTodoPage" class="button is-link is-large">Create Todos</a>
                        </div>
                        <div v-else>
                            <h2 class="title">Behold the Todo app!</h2>
                            <h3 class="subtitle">Please log in to continue (Just click Log In)</h3>
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">
                                    <input v-model="username" class="input is-medium" type="text" placeholder="Username">
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-user"></i>
                                    </span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control has-icons-left">
                                    <input v-model="password" class="input is-medium" type="password" placeholder="Password">
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                            <div class="columns">
                                <div class="column is-half is-offset-half">
                                    <div class="field is-grouped is-grouped-right">
                                        <p class="control">
                                            <a @click="logIn" class="button is-link is-medium">Log In</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            username: 'DemoUser',
            password: 'fakepassword'
        }
    },
    methods: {
        logIn() {
            this.$store.dispatch('addSessionAsync', {
                username: this.username,
                password: this.password
            })
        },
        goToTodoPage() {
            this.$router.push({ path: 'Todos' })
        }
    },
    computed: {
        session() {
            return this.$store.getters.session
        }
    }
}
</script>

<style scoped>
.adjust-for-navbar {
    margin-top: -53px;
}
</style>
