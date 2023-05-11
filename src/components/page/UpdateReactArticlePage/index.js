import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchReactArticleId } from '../../../redux/reducers/articleSlice'
import UpdateReactArticleForm from './UpdateReactArticleForm'

import spinner from '../../spinner.gif'

const UpdateReactArticlePage = ({
	fetchReactArticleId,
	article: { post, loading },
}) => {
	const { slug } = useParams()

	useEffect(() => {
		fetchReactArticleId(slug)
	}, [fetchReactArticleId, slug])

	return !loading && post ? (
		<div className='wraper'>
			<main className='main'>
				<div className='main-row'>
					<div className='wraper-left'>
						<div>
							<h1>Редактировать статью React</h1>
							<UpdateReactArticleForm post={post} id={post.id} />
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

export default connect(mapStateToProps, { fetchReactArticleId })(
	UpdateReactArticlePage
)
