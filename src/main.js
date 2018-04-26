import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import $ from 'jquery'
import ElementUI from 'element-ui';
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'
import axios from 'axios'  
import { get, post } from './api/api'

Vue.use(Vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$get = get;
Vue.prototype.$post = post;

console.log('9966')

new Vue({
  	el: '#app',
  	store,
  	router,
	render: h => h(App)
})
