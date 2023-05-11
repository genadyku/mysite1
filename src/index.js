import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import configureAppStore, { history } from './redux/reducers/configureStore'
import 'prismjs'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
import './index.scss'
import './prism.css'
import './prism-line-numbers.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'

import App from './App'

const store = configureAppStore()
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App history={history} />
		</Provider>
	</React.StrictMode>
)
