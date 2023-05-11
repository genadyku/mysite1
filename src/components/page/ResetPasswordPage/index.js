import React from 'react'
import ResetPasswordForm from '../../commons/ResetPasswordForm'

const ResetPasswordPage = () => (
	<div className='wraper'>
		<main className='main'>
			<div className='main-row'>
				<div className='wraper-center'>
					<div className='wraper-center-item'>
						<h3>Новый пароль</h3>
						<ResetPasswordForm />
					</div>
				</div>
			</div>
		</main>
	</div>
)

export default ResetPasswordPage
