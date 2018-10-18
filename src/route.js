import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home';
import Layout from './views/layout/layout';
import NotFound from './views/errorPages/404';
import List from './views/list/index';
import About from './views/About';
import Girls from './views/girls/index';

/** use plugin */
Vue.use(VueRouter);

export const routeTables = [
    { 
        path: '/',
        component: Layout,
        children : [
        { path: '/Home/', component: Home },
        { path: '/List/:type/', component: List, props: true},
        { path: '/About/', component: About},
        { path: '/Girls/', component: Girls},
    ]
},
];

export const generateRouter = () => {
    return new VueRouter({
        routes: routeTables, // (缩写) 相当于 routes: routes
    });
} 