/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { addArticle } from '../../redux/reducers/articleSlice'

const AddArticeForm = () => {
	const [type, setType] = useState('')
	const [title, setTitle] = useState('')
	const [titleShort, setTitleShort] = useState('')
	const [slug, setSlug] = useState('')
	const [textf, setTextf] = useState('')

	const dispatch = useDispatch()

	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(addArticle({ type, title, titleShort, slug, textf }))
	}

	const types = [
		{ value: 'sql', key: '1' },
		{ value: 'pl/sql', key: '2' },
		{ value: 'javascript', key: '3' },
		{ value: 'css', key: '4' },
		{ value: 'nodejs', key: '5' },
		{ value: 'reactjs', key: '6' },
	]

	return (
		<div className='add-article'>
			<form onSubmit={onSubmit}>
				<label>Тип*</label>
				<select
					className='form-control'
					onChange={(e) => setType(e.target.value)}
				>
					<option value='⬇️ Select a fruit ⬇️'> -- Тип статьи-- </option>
					{types.map((item) => (
						<option value={item.value} key={item.key}>
							{item.value}
						</option>
					))}
				</select>

				<label>Название раздела* </label>
				<input
					type='text'
					name='title'
					className='upd-article__input'
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label>Краткое описание раздела* </label>
				<input
					type='text'
					name='titleShort'
					className='upd-article__input'
					onChange={(e) => setTitleShort(e.target.value)}
				/>

				<label>Ссылка*</label>
				<input
					type='text'
					name='slug'
					className='upd-article__input'
					onChange={(e) => setSlug(e.target.value)}
				/>
				<label>Содержание*</label>
				<textarea
					cols='120'
					rows='50'
					name='textf'
					onChange={(e) => setTextf(e.target.value)}
				/>
				<div className='main-row'>
					<button type='submit' className='regist-form__button'>
						Сохранить
					</button>
					<Link to='/' className='regist-form__nav'>
						{' '}
						Отмена
					</Link>
				</div>
			</form>
		</div>
	)
}

export default AddArticeForm
