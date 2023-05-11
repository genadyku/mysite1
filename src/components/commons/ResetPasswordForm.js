import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { connect } from 'react-redux'
import { passwordReset } from '../../actions/auth'
import TextFieldGroup from './TextFieldGroup'

const divStyle = {
	color: '#d9534f',
}

function useQuery() {
	return new URLSearchParams(useLocation().search)
}

const ResetPasswordForm = ({ passwordReset, auth }) => {
	const query = useQuery()
	const [password, setPassword] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()
		passwordReset(query.get('oobCode'), password)
	}

	const { err } = auth
	return (
		<div className='login'>
			<div className='container'>
				<div className='row'>
					<div>
						<form onSubmit={onSubmit}>
							<TextFieldGroup
								placeholder='Пароль'
								name='password'
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
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

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps, { passwordReset })(ResetPasswordForm)
