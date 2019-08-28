import Vue from 'vue';
import Router from 'vue-router';
import About from '../components/About.vue';
import Home from '../components/Home.vue';
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '',
            component: Home,
        },
        {
            path: '/home',
            name: 'home',
            component:Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        
    ]
});

