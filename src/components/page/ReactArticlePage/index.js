import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Prism from 'prismjs'

import { fetchReactArticleId } from '../../../redux/reducers/articleSlice'
import Error from '../../utils/Error'
import Code from '../../utils/Code'

const ReactArticlePage = () => {
	const { slug } = useParams()
	const dispatch = useDispatch()
	const store = useSelector((state) => ({
		article: state.articles,
	}))

	useEffect(() => {
		dispatch(fetchReactArticleId(slug))
		Prism.highlightAll()
	}, [dispatch, slug])

	const { post, loading, error } = store.article
	const renderPage = (post, loading /* , error */) => {
		if (!loading && (post == null || Object.keys(post).length === 0)) {
			return <Error text='Страница не найдена' code='404' />
		}
		if (!loading && post) {
			return (
				<div className='wraper'>
					<main className='main'>
						<div className='main-row'>
							<div className='post'>
								<h4>{post.title}</h4>
								<span className='main-row__text'>{post.titleShort}</span>
								<Code text={post.textf} />
							</div>
						</div>
					</main>
				</div>
			)
		}

		return (
			<div className='wraper'>
				<main className='main'>
					<div className='main-row'>
						<div className='spinner' />
					</div>
				</main>
			</div>
		)
	}

	return renderPage(post, loading, error)
}

export default ReactArticlePage
