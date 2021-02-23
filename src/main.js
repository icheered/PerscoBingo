
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './js/store'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.component('app', App);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app') 



