import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './components/_globals'

new Vue({
  render: h => h(App),
}).$mount('#app')
