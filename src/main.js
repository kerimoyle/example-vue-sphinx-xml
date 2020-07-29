import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import SphinxXml from 'vue-sphinx-xml'
import VueHighlightJS from 'vue-highlightjs'

import 'highlight.js/styles/xcode.css'

Vue.use(SphinxXml, { store })
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
