import Vue from 'vue';
import VueRouter from 'vue-router';

const lazyLoading = name => () => {
    return import(`../views/${name}`);
}
 
/** use plugin */
Vue.use(VueRouter);

export const routeTables = [
    { 
        path: '/',
        component: lazyLoading('layout'),
        children : [
        { path: '/Home/', component: lazyLoading('home') },
        { path: '/List/:type/', component: lazyLoading('list'), props: true},
        { path: '/About/', component: lazyLoading('about')},
        { path: '/Girls/', component: lazyLoading('girls')},
    ]
},
];

export const generateRouter = () => {
    return new VueRouter({
        routes: routeTables, 
    });
} 