import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home';
import Layout from './views/layout/layout';
import NotFound from './views/errorPages/404';
import List from './views/list/index';

/** use plugin */
Vue.use(VueRouter);

const routes = [
    { 
        path: '/',
        component: Layout,
        children : [
        { path: '/Home', component: Home },
        { path: '/List/:type', component: List},
    ]
},
];

export default new VueRouter({
routes // (缩写) 相当于 routes: routes
})