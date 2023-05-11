import React from 'react'

import EditArticleItem from './EditArticleItem'

const EditArticleList = ({ articles }) => (
	<div className='wraper'>
		<main className='main'>
			{articles.map((article) => (
				<EditArticleItem article={article} key={article.id} />
			))}
		</main>
	</div>
)

export default EditArticleList
