export const state = () => ({
// login status
loggedIn: false,
// login error message
login_err_msg: '',
// login user info
user_data: [],
// singup return info
signup_data: [],
// msg return
msg: '',
token: '',
token_type: ''
})

export const mutations = {
	SET_TOKEN(state, token) {
		state.token = token;
	},
	TOKEN_TYPE(state, token_type) {
		state.token_type = token_type;
	},
	LOGIN_STATUS(state, data) {
		state.loggedIn = data; 
	},
	ADD_USER_DATA(state, data) {
		state.user_data = data;
	},
	LOGIN_ERR_MSG(state, data) {
		state.login_err_msg = data;
	}	
}

export const actions = {
	submitLoginData(context, data) {
		try {
			let url = "http://localhost:8000/api/auth/login";

			return this.$axios.$post(url, data)
			.then(result => {
				//console.log(result);
				if(result.status == 1) {
					this.$notify.success({
						//title: 'Hooray',
						message: result.message
					})
					console.log(result);
					context.commit('SET_TOKEN', result.access_token);
					context.commit('TOKEN_TYPE', result.token_type);
					localStorage.setItem('token', result.access_token);
					localStorage.setItem('token_type', result.token_type);
					this.$axios.defaults.headers.common["Authorization"] = 'Bearer '+ result.access_token;
					context.commit('LOGIN_STATUS', true);
					context.commit('ADD_USER_DATA', result.user);
					context.commit('LOGIN_ERR_MSG', '')	
				}
				else if(result.status == 0) {
					this.$notify.error({
						//title: 'Hooray',
						message: result.message
					})
		        }
			})

		} catch (err) {
			context.commit('RESET_USER_DATA');
		}
	},
	getProfileData(context) {
		try {
			let profileUrl = "http://localhost:8000/api/auth/user-profile";
			return this.$axios.$get(profileUrl)
			.then(result => {
				context.commit('LOGIN_STATUS', true);
				context.commit('ADD_USER_DATA', result);
			})	
		} catch (err) {

		}
	}
}