import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Todos from '../pages/Todos'

Vue.use(VueRouter)

const routes = [
    {path: '/todos', component: Todos},
    {path: '/', component: Home}
]

export default new VueRouter({
    routes,
    mode: 'history'
})
