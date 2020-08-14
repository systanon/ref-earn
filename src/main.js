import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$bus', {
  get: function bus() {
    return this.$root.bus
  },
})

new Vue({
  router,
  store,
  vuetify,
  data: {
    bus: new Vue({}),
  },
  render: (h) => h(App),
}).$mount('#app')
