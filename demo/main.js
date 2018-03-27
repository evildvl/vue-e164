// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

const vueE164 = process.env.NODE_ENV === 'development'
  ? require('../src/vue-e164.js')
  : require('../dist/vue-e164.js')

Vue.config.productionTip = false

// Using plugin
Vue.use(vueE164, {
  plus: true,
  brackets: false,
  space: false
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
