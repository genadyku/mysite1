import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import EditArticleList from './EditArticleList'
import Error from '../../utils/Error'

import { fetchAllArticles } from '../../../redux/reducers/articleSlice'

const EditArticlesPage = ({
	articles: { posts, loading, error },
	fetchAllArticles,
}) => {
	useEffect(() => {
		fetchAllArticles()
	}, [fetchAllArticles])

	function renderPage(posts, loading, error) {
		if (!loading && posts !== null) {
			return <EditArticleList articles={posts} />
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

function mapStateToProps(state) {
	return { articles: state.articles }
}

export default connect(mapStateToProps, { fetchAllArticles })(EditArticlesPage)
