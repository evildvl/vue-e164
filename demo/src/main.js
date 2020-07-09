import Vue from 'vue'
import App from './App.vue'
import e164 from '../../dist/vue-e164'

const options = {
  plus: true,
  brackets: false,
  space: false,
  dash: false,
  areaCode: true
}

Vue.use(e164, options)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
