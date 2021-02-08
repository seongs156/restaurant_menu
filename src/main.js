// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import VueDaumPostcode from "vue-daum-postcode"

import { store } from './store/store'
import firebase from './firebase'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.eventBus = new Vue()
Vue.use(VueDaumPostcode)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueCompositionAPI)
Vue.use(firebase)

Vue.config.productionTip = false


const router = new VueRouter({
  routes,
  mode:'history'
})





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { App },
  template: '<App/>'
})
