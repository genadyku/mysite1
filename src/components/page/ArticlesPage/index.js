import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArticleList from './ArticleList'
import Error from '../../utils/Error'
import { fetchAllArticles } from '../../../redux/reducers/articleSlice'

const ArticlesPage = () => {
	const dispatch = useDispatch()
	const store = useSelector((state) => ({
		articles: state.articles,
	}))
	useEffect(() => {
		dispatch(fetchAllArticles())
	}, [dispatch])

	const { posts, loading, error } = store.articles
	function renderPage(posts, loading, error) {
		if (!loading && posts) {
			return <ArticleList articles={posts} />
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

export default ArticlesPage
