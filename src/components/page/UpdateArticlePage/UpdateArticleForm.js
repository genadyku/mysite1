import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Prism from 'prismjs'
import PreviewCode from '../../commons/components/PreviewCode'
import { updateArticle } from '../../../redux/reducers/articleSlice'
import 'prismjs/components/prism-sql'
import 'prismjs/plugins/line-numbers/prism-line-numbers'

const UpdateArticleForm = ({ post, id, updateArticle }) => {
	const [edtarticle, setEdtarticle] = useState(post)

	const [codeText, setText] = useState('')

	useEffect(() => {
		Prism.highlightAll()
	}, [])
	const handleChange = (e) => {
		setEdtarticle({ ...edtarticle, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		updateArticle({ ...edtarticle, id })
	}
	const handlePreview = (e) => {
		e.preventDefault()
		const codep = edtarticle.textf
		const code = codep.replace(/<br>/gi, '\n')
		setText(code)
	}

	const { title, titleShort, slug, textf } = edtarticle

	return (
		<div className='upd-article'>
			<form onSubmit={handleSubmit}>
				<label>Название раздела* </label>
				<input
					type='text'
					name='title'
					className='upd-article__input'
					onChange={handleChange}
					defaultValue={title}
				/>
				<label>Краткое описание раздела* </label>
				<input
					type='text'
					name='titleShort'
					className='upd-article__input'
					onChange={handleChange}
					defaultValue={titleShort}
				/>
				<label>Ссылка*</label>
				<input
					type='text'
					name='slug'
					className='upd-article__input'
					onChange={handleChange}
					defaultValue={slug}
				/>

				<label>Содержание*</label>
				<textarea
					cols='85'
					rows='50'
					name='textf'
					onChange={handleChange}
					defaultValue={textf}
				/>
				<div className='main-row'>
					<button type='submit' className='regist-form__button'>
						Сохранить
					</button>
					<div className='main-row-cansel'>
						<Link to='/' className='regist-form__nav'>
							{' '}
							Отмена
						</Link>
						<button
							className='button-preview'
							type='submit'
							onClick={handlePreview}
						>
							Просмотреть{' '}
						</button>
					</div>
				</div>
			</form>
			<div className='preview-code'>
				<PreviewCode code={codeText} />
			</div>
		</div>
	)
}

function mapStateToProps(state) {
	return { article: state.articles }
}

export default connect(mapStateToProps, { updateArticle })(UpdateArticleForm)
