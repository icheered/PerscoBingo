
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import vuetify from './plugins/vuetify'
import VueConfetti from 'vue-confetti'
import router from './router'
import store from './js/store'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueConfetti)
Vue.component('app', App);

new Vue({
  vuetify,
  router,
  store,
  VueConfetti,
  render: h => h(App)
}).$mount('#app') 



