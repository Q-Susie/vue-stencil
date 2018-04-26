
getLogin(state){
	let isLogin = state.isLogin
	if(!isLogin){
		isLogin = localStorage.getItem('data') && JSON.parse(localStorage.getItem("data")) || ''
	}
	return isLogin
}

export default getLogin;