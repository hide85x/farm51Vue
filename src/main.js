import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import swal from './vueswal'
import vuetify from './plugins/vuetify';
import Axios from 'vue-axios-cors';

Vue.config.productionTip = false;

Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

new Vue({
  swal,
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
