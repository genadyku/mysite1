import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-sql'
import 'prismjs/plugins/line-numbers/prism-line-numbers'

const PreviewCode = ({ code }) => {
	useEffect(() => {
		Prism.highlightAll()
	}, [code])

	const createMarkup = (text) => ({ __html: text })

	return (
		<div className='wraper'>
			<main className='main'>
				<div className='main-row'>
					<h4>PRISM1</h4>
					<div
						className='main-row-content'
						dangerouslySetInnerHTML={createMarkup(code)}
					/>
				</div>
			</main>
		</div>
	)
}

export default PreviewCode
