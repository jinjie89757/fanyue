import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/common.scss';
import './assets/style/reset.scss';
import './mock/index'

import cache from './util/cache'
Vue.use(cache)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
