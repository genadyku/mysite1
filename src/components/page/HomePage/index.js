import React, { useEffect } from 'react'
import Prism from 'prismjs'

const Home = () => {
	useEffect(() => {
		Prism.highlightAll()
	}, [])

	function createMarkup(text) {
		return { __html: text }
	}
	const things = `<pre class='language-javascript line-numbers'><code>\nconst things = [\n'Playground',\n'Strategy',\n]\n function add(num1 ,num2 ){\n return num1 +num2 \n} </code></pre>`

	return (
		<div className='wraper'>
			<main className='main'>
				<div className='main-row'>
					<h3>Этот сайт разрабатывался мной в чисто справочных целях</h3>
					<div dangerouslySetInnerHTML={createMarkup(things)} />
				</div>
			</main>
		</div>
	)
}

export default Home
