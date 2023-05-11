import React from 'react'

const TextFieldGroup = ({
	name,
	placeholder,
	value,

	error,
	info,
	type,
	onChange,
	disabled,
}) => (
	<div className='form-group'>
		<input
			className='regist-form__input'
			type={type}
			placeholder={placeholder}
			name={name}
			value={value}
			onChange={onChange}
			disabled={disabled}
		/>
		{info && <small className='form-text text-muted'>{info}</small>}
		{error && <div className='invalid-feedback'>{error}</div>}
	</div>
)

export default TextFieldGroup
