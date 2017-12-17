import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Todos from '../pages/Todos'
import Login from '../pages/Login'

Vue.use(VueRouter)

const routes = [
    {path: '/todos', component: Todos},
    {path: '/login', component: Login},
    {path: '/', component: Home}
]

export default new VueRouter({
    routes,
    mode: 'history'
})
