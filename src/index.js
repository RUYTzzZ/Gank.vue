/*
 * Copyright (c) 2018 Mailtech.cn, Ltd. All Rights Reserved.
 */

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from 'app';
import router from 'route';

Vue.use(ElementUI);
  /** app init */
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');
