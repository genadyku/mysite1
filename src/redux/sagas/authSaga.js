import { call, put, all, take } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import {
	signIn,
	signUp,
	addUser,
	forgotPassword,
	confirmThePasswordReset,
	getUser,
} from '../../services/db'

import {
	SIGNIN,
	SIGNUP,
	GET_USER,
	LOADING,
	FORGOT_PASSWORD,
	RESET_PASSWORD,
	LOGOUT_REQUEST,
} from '../../constants/constants'

import {
	SigninSuccess,
	SetAuthStatus,
	SignUpSuccess,
	SignOutSuccess,
} from '../reducers/authSlice'
import { signout } from '../../actions/auth'

export const setLoading = (bool = true) => ({
	type: LOADING,
	payload: bool,
})

function* handleError(e) {
	switch (e.code) {
		case 'auth/network-request-failed':
			yield put(
				SetAuthStatus('Произошла ошибка сети. Пожалуйста, попробуйте еще раз.')
			)

			break
		case 'auth/email-already-in-use':
			yield put(
				SetAuthStatus(
					'Email уже используется. Пожалуйста, используйте другой адрес электронной почты'
				)
			)
			break
		case 'auth/wrong-password':
			yield put(SetAuthStatus('Неверный адрес электронной почты или пароль'))
			break
		case 'auth/user-not-found':
			yield put(SetAuthStatus('Неверный адрес электронной почты или пароль'))
			break
		case 'auth/reset-password-error':
			yield put(
				SetAuthStatus(
					'Не удалось отправить электронное письмо для сброса пароля. Вы правильно набрали адрес электронной почты?'
				)
			)
			break
		default:
			yield put(SetAuthStatus(e.message))
			break
	}
}

export const signInSaga = function* () {
	while (true) {
		try {
			const action = yield take(SIGNIN)
			const ref = yield call(
				signIn,
				action.payload.email,
				action.payload.password
			)
			const user = yield call(getUser, ref.user.uid)
			yield put(SigninSuccess(user.data()))
			yield put(push('/articles'))
		} catch (error) {
			yield handleError(error)
		}
	}
}

export const signUpSaga = function* () {
	while (true) {
		try {
			const action = yield take(SIGNUP)
			const resp = yield call(
				signUp,
				action.payload.email,
				action.payload.password
			)
			yield put(SignUpSuccess(resp))
			const user = {
				fullname: action.payload.fullname,
				email: action.payload.email,
				role: 'USER',
			}

			yield call(addUser, resp.user.uid, user)
			yield put(push('/articles'))
		} catch (error) {
			yield handleError(error)
		}
	}
}

export const forgotPasswordSaga = function* () {
	while (true) {
		try {
			const action = yield take(FORGOT_PASSWORD)
			yield call(forgotPassword, action.payload.email)
			yield put(push('/login'))
		} catch (error) {
			yield handleError(error)
		}
	}
}

export const resetPasswordSaga = function* () {
	while (true) {
		try {
			const action = yield take(RESET_PASSWORD)
			yield call(
				confirmThePasswordReset,
				action.payload.oobCode,
				action.payload.password
			)
			yield put(push('/login'))
		} catch (error) {
			yield handleError(error)
		}
	}
}

export const signOutSaga = function* () {
	while (true) {
		try {
			yield take(LOGOUT_REQUEST)
			yield call(signout)
			yield put(SignOutSuccess())
			yield put(push('/articles'))
		} catch (error) {
			yield handleError(error)
		}
	}
}

export const getUserSaga = function* () {
	while (true) {
		try {
			const action = yield take(GET_USER)
			yield call(getUser, action.payload.uid)
		} catch (error) {
			yield handleError(error)
		}
	}
}

export function* saga() {
	yield all([
		signInSaga(),
		signUpSaga(),
		forgotPasswordSaga(),
		resetPasswordSaga(),
		signOutSaga(),
	])
}
