import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signIn } from '../../actions/auth'
import TextFieldGroup from './TextFieldGroup'

const divStyle = {
	color: '#d9534f',
}

const SigninForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const store = useSelector((state) => ({
		auth: state.auth,
	}))

	const dispatch = useDispatch()

	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(signIn(email, password))
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
							<TextFieldGroup
								placeholder='Password'
								name='password'
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<div className='main-row'>
								<button type='submit' className='regist-form__button'>
									Вход
								</button>
								<Link to='/' className='regist-form__nav'>
									{' '}
									Отмена
								</Link>
								<Link to='/forgot-password' className='regist-form__nav cansel'>
									{' '}
									Забыли пароль
								</Link>
							</div>
							<div>{err && <div style={divStyle}>{err}</div>}</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SigninForm
