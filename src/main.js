import Vue from 'vue'
import Axios from 'axios'
import router from './routing/router'
import store from './store/index'
import App from './App.vue'

Vue.prototype.$http = Axios

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
