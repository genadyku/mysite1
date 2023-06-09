import './App.css'

import React from 'react'
import { ConnectedRouter } from 'connected-react-router'

import routes from './routes'

const App = ({ history }) => (
	<ConnectedRouter history={history}>{routes}</ConnectedRouter>
)
export default App
