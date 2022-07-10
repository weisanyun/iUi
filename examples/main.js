import Vue from 'vue'
import App from './App.vue'
import iUI from '../packages'

Vue.config.productionTip = false
Vue.use(iUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
