import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { forgotPassword } from '../../actions/auth'
import TextFieldGroup from './TextFieldGroup'

const divStyle = {
	color: '#d9534f',
}

const ForgotPasswordForm = () => {
	const [email, setEmail] = useState('')

	const store = useSelector((state) => ({
		auth: state.auth,
	}))

	const dispatch = useDispatch()

	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(forgotPassword(email))
	}

	const { err } = store.auth

	return (
		<div className='login'>
			<div className='container'>
				<div className='row'>
					<div>
						<form onSubmit={onSubmit}>
							<TextFieldGroup
								placeholder='Email Address'
								name='email'
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<button type='submit' className='regist-form__button'>
								Вход
							</button>
							<div>{err && <div style={divStyle}>{err}</div>}</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ForgotPasswordForm
