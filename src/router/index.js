import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const lazyLoading = name => () => {
  return import(`../views/${name}`);
};

export default new Router({
  routes: [
    {
      path: '/',
      component: lazyLoading('layout'),
      children: [
        { path: '/Home/', component: lazyLoading('home') },
        { path: '/List/:type/', component: lazyLoading('list'), props: true },
        { path: '/About/', component: lazyLoading('about') },
        { path: '/Girls/', component: lazyLoading('girls') }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '../views/other-page/time-out.vue')
    }
  ]
});
