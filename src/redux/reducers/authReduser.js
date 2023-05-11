export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS'
export const SIGNIN_ERROR = 'SIGNIN_ERROR'

const initState = null

export default (state = initState, action) => {
	switch (action.type) {
		case SIGNIN_SUCCESS:
			return {
				id: action.payload.id,
				provider: action.payload.provider,
				err: null,
			}
		case SIGNIN_ERROR:
			return {
				err: action.payload,
			}

		case SIGNOUT_SUCCESS:
			return null
		default:
			return state
	}
}
