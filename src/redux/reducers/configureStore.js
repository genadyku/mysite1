/*
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './reducers'
import rootSaga from '../sagas/rootSaga'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(preloadedState) {
	const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
	const store = createStore(
		createRootReducer(history),
		preloadedState,
		composeEnhancer(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
	)

	sagaMiddleware.run(rootSaga)
	return store
}

*/

import { createBrowserHistory } from 'history'
import { configureStore } from '@reduxjs/toolkit'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'

// import articleReduser from './articleReduser'
import { articleSlice } from './articleSlice'
// import authReduser from './authReduser'
import { authSlice } from './authSlice'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

export default function configureAppStore(preloadedState) {
	const store = configureStore({
		middleware: [sagaMiddleware, routerMiddleware(history)],
		reducer: {
			// articles: articleReduser,
			articles: articleSlice.reducer,
			// auth: authReduser,
			auth: authSlice.reducer,
			router: connectRouter(history),
		},
		preloadedState,
	})

	sagaMiddleware.run(rootSaga)
	return store
}
