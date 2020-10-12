import  Router  from 'vue-router';
import Vue from 'vue'

import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import Store from './store/index.js'


Vue.use(Router);
export default new Router({
    routes: [
        {
            path:"/",
            redirect:"about",
            component: About
        },
        {
            path:"/about",
            name:"about",
            component: About,
        },
        {
            path:'/home',
            name: "home",
            component: Home,
            beforeEnter(from,to, next) {
                if(!Store.getters.isLoggedIn) {
                next('/login')
            } else {
                next()
            }}
        },
        {
            path:"/login",
            name:"login",
            component: Login
        }

    ]
})