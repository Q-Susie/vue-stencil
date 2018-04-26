import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

function localStoreSet (state) {
    window.localStorage.setItem("data",JSON.stringify(state))
}

function localStoreRemove (state) {
    window.localStorage.removeItem("data",JSON.stringify(state))
}

const store = new Vuex.Store({
	state: {
		isLogin: false
	},
	mutations: {
		login (state, data) {
			state.isLogin = data
			localStoreSet(state)
		},
		logout (state) {
			state.isLogin = false
			localStoreRemove(state)
		}
	},
	actions: {
		login (context, data) {
			context.commit('login', data)
		},
		logout (context) {
			context.commit('logout')
		}
	},
	getters: {
		getLogin(state){
			let isLogin = state.isLogin
			console.log('6666',isLogin)
			if(!isLogin){
				state.isLogin = localStorage.getItem('data') && JSON.parse(localStorage.getItem("data")) || ''
				console.log(isLogin)
			}
			return state.isLogin
		}
	}
})


export default store


