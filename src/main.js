import Vue from 'vue'
import Axios from 'axios'
import router from './routing/router.js'
import App from './App.vue'

Vue.prototype.$http = Axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
