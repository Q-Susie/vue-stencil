import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isLogin: false
	},
	mutations: {
		login (state, data) {
			state.isLogin = data
		},
		logout (state) {
			state.isLogin = false
		}
	},
	actions: {
		login (context, data) {
			context.commit('login', data)
		},
		logout (context) {
			context.commit('logout')
		}
	}
})



export default store
