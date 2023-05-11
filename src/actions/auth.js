import {
	SIGNIN,
	SIGNUP,
	GET_USER,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	FORGOT_PASSWORD,
	RESET_PASSWORD,
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE,
} from '../constants/constants'

export const signIn = (email, password) => ({
	type: SIGNIN,
	payload: {
		email,
		password,
	},
})

export const requestLogin = () => ({
	type: LOGIN_REQUEST,
})

export const receiveLogin = (user) => ({
	type: LOGIN_SUCCESS,
	user,
})

export const loginError = () => ({
	type: LOGIN_FAILURE,
})

export const requestLogout = () => ({
	type: LOGOUT_REQUEST,
})

export function signUp(user, email, password) {
	return {
		type: SIGNUP,
		payload: {
			fullname: user,
			email,
			password,
		},
	}
}

export const signout = () => ({
	type: LOGOUT_REQUEST,
})
export const forgotPassword = (email) => ({
	type: FORGOT_PASSWORD,
	payload: {
		email,
	},
})

export const passwordReset = function (oobCode, password) {
	return {
		type: RESET_PASSWORD,
		payload: {
			oobCode,
			password,
		},
	}
}

export function getUser(uid) {
	return {
		type: GET_USER,
		payload: {
			uid,
		},
	}
}

export const receiveLogout = () => ({
	type: LOGOUT_SUCCESS,
})

export const logoutError = () => ({
	type: LOGOUT_FAILURE,
})
