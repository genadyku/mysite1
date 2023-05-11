import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signUp } from '../../actions/auth'
import TextFieldGroup from './TextFieldGroup'

const divStyle = {
	color: '#d9534f',
}

const SignupForm = () => {
	const [fullname, setFullname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const store = useSelector((state) => ({
		auth: state.auth,
	}))

	const dispatch = useDispatch()

	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(signUp(fullname, email, password))
	}
	const { err } = store.auth

	return (
		<div className='login'>
			<div className='container'>
				<div className='row'>
					<div>
						<form onSubmit={onSubmit}>
							<TextFieldGroup
								placeholder='Имя пользователя'
								name='fullname'
								type='text'
								value={fullname}
								onChange={(e) => setFullname(e.target.value)}
							/>

							<TextFieldGroup
								placeholder='Email Address'
								name='email'
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextFieldGroup
								placeholder='Password'
								name='password'
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<input type='submit' className='btn btn-info btn-block mt-4' />
							<div>{err && <div style={divStyle}>{err}</div>}</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignupForm
