import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchArticleId } from '../../../redux/reducers/articleSlice'
import UpdateArticleForm from './UpdateArticleForm'

import spinner from '../../spinner.gif'

const UpdateArticlePage = ({ fetchArticleId, article: { post, loading } }) => {
	const { slug } = useParams()

	useEffect(() => {
		fetchArticleId(slug)
	}, [fetchArticleId, slug])

	return !loading && post ? (
		<div className='wraper'>
			<main className='main'>
				<div className='main-row'>
					<div className='wraper-left'>
						<div>
							<h1>Редактировать статью</h1>
							<UpdateArticleForm post={post} id={post.id} />
						</div>
					</div>
				</div>
			</main>
		</div>
	) : (
		<div className='container'>
			<div className='row'>
				<img src={spinner} alt='Loading...' />
			</div>
		</div>
	)
}

function mapStateToProps(state) {
	return { article: state.articles }
}

export default connect(mapStateToProps, { fetchArticleId })(UpdateArticlePage)
