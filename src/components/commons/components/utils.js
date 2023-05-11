import { useSelector } from 'react-redux'

const store = useSelector((state) => ({
	role: state.auth.role,
}))

export const isLogin = () => {
	if (store.role === 'Admin') {
		return true
	}

	return false
}
