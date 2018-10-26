/*
 * Copyright (c) 2018 Mailtech.cn, Ltd. All Rights Reserved.
 */

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from 'app';
import {generateRouter, routeTables} from './router/index';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);

const router = generateRouter();

router.beforeEach((to, from, next) => {
  /** go to valid module */
  const entry = /^\/(.*?)\//.exec(to.path);
  if (!entry) {
      /** replace to the first module */
      next({path: `/Home/`, replace: true});
  } else {
      next();
  }
});

Vue.use(ElementUI);
  /** app init */
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');
