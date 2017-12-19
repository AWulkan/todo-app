<template>
<div id="home" class="adjust-for-navbar">
    <section class="hero is-fullheight is-light is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns">
                    <div class="column is-half is-offset-one-quarter">
                        <h2 class="title">Welcome to the Todo app!</h2>
                        <h3 class="subtitle">Please log in to continue (Just click Log In)</h3>
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input is-medium" type="text" placeholder="Username" value="demo-account">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-user"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input is-medium" type="password" placeholder="Password" value="fakepassword">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div class="columns">
                            <div class="column is-half is-offset-half">
                                <div class="field is-grouped is-grouped-right">
                                    <p class="control">
                                        <a class="button is-link is-medium">Log In</a>
                                    </p>
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
        }
    }
}
</script>

<style scoped>
.adjust-for-navbar {
    margin-top: -53px;
}
</style>
