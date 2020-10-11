import  Router  from 'vue-router';
import Vue from 'vue'

import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import About from './components/About'


Vue.use(Router);
export default new Router({
    mode:"history",
    routes: [
        {
            path:"/about",
            name:"about",
            component: About
        },
        {
            path:'/home',
            name: "home",
            component: Home
        },
        {
            path:"/login",
            name:"login",
            component: Login
        },
        {
            path:"/signUp",
            name:"signUp",
            component: SignUp
        }
    ]
})