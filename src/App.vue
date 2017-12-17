<template>
<div id="app">
  <app-navbar></app-navbar>
  <router-view></router-view>
</div>
</template>

<script>
import Navbar from './comp/Navbar.vue'

export default {
  name: 'app',
  components: {
    'app-navbar': Navbar
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
