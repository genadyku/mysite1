import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	id: null,
	email: null,
	role: null,
	fullname: null,
	provider: null,
	err: null,
}
export const authSlice = createSlice({
	name: 'auth',
	initialState,

	reducers: {
		SigninSuccess: (state, action) => {
			state.id = action.payload.uid
			state.email = action.payload.email
			state.provider = action.payload.provider
			state.role = action.payload.role
			state.fullname = action.payload.fullname
			state.err = null
		},
		SigninFailure: (state, action) => {
			state.id = null
			state.email = null
			state.provider = null
			state.role = null
			state.fullname = null
			state.err = action.payload.code
		},
		SetAuthStatus: (state, action) => {
			state.id = null
			state.provider = null
			state.err = action.payload
		},
		SignUpSuccess: (state, action) => {
			state.id = action.payload.id
			state.provider = action.payload.provider
			state.err = null
		},
		SignUpFailure: (state, action) => {
			state.id = null
			state.provider = null
			state.err = action.payload.code
		},
		SignOutSuccess: (state) => {
			state.id = null
			state.email = null
			state.provider = null
			state.role = null
			state.fullname = null
			state.err = null
		},
		SignOutFailure: (state, action) => {
			state.id = null
			state.email = null
			state.provider = null
			state.role = null
			state.fullname = null
			state.err = action.payload.code
		},
	},
})

export const {
	SigninSuccess,
	SigninFailure,
	SetAuthStatus,
	SignUpSuccess,
	SignUpFailure,
	SignOutSuccess,
	SignOutFailure,
} = authSlice.actions
export default authSlice.reducer
