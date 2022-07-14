require('./bootstrap')

import Vue from 'vue'
import Vueform from '@vueform/vueform/plugin'
import vueformConfig from './../../vueform.config.js'

Vue.use(Vueform, vueformConfig)

import App from './components/App.vue'

new Vue({
  render: h => h(App),
}).$mount('#app')
