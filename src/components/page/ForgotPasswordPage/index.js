import React from 'react'
import ForgotPasswordForm from '../../commons/ForgotPasswordForm'

const ForgotPasswordPage = () => (
	<div className='wraper'>
		<main className='main'>
			<div className='main-row'>
				<div className='wraper-center'>
					<div className='wraper-center-item'>
						<h3>Забыли пароль</h3>
						<ForgotPasswordForm />
					</div>
				</div>
			</div>
		</main>
	</div>
)

export default ForgotPasswordPage
