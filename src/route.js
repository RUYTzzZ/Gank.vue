import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home';
import Layout from './views/layout/layout';
import NotFound from './views/errorPages/404';

/** use plugin */
Vue.use(VueRouter);

const routes = [
    { 
        path: '/',
        component: Layout,
        children : [
        { path: '/HOME', component: Home },
        { path: '/FE', component: Home},
        { path: '/MeiZi', component:NotFound},
    ]
},
];

export default new VueRouter({
routes // (缩写) 相当于 routes: routes
})