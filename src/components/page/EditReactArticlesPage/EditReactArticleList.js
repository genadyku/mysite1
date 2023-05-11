import React from 'react'

import EditReactArticleItem from './EditReactArticleItem'

const EditReactArticleList = ({ articles }) => (
	<div className='wraper'>
		<main className='main'>
			{articles.map((article) => (
				<EditReactArticleItem article={article} key={article.id} />
			))}
		</main>
	</div>
)

export default EditReactArticleList
