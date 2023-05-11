import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EditReactArticleList from './EditReactArticleList'
import Error from '../../utils/Error'

import { fetchAllReactArticles } from '../../../redux/reducers/articleSlice'

const EditReactArticlesPage = () => {
	const store = useSelector((state) => ({
		articles: state.articles,
	}))

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchAllReactArticles())
	}, [dispatch])

	const { posts, loading, error } = store.articles
	function renderPage(posts, loading, error) {
		if (!loading && posts) {
			return <EditReactArticleList articles={posts} />
		}

		if (error) {
			return <Error text={error.message} code={error.statusCode} />
		}

		return (
			<div className='wraper'>
				<main className='main'>
					<div className='main-row'>
						<div className='spiner-img' />
						<div className='spiner-contents'>
							<ul>
								<li />
								<li />
							</ul>
						</div>
					</div>
				</main>
			</div>
		)
	}

	return renderPage(posts, loading, error)
}

export default EditReactArticlesPage
