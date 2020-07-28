import Vue from 'vue'
import App from './App.vue'

import './index.css';

window.events = new Vue({});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
