import { take, call, put, all } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import {
	getArticles,
	getArticle,
	getReactArticles,
	getReactArticle,
	generateKey,
	addArticle,
	addReactArticle,
	deleteArticle,
	deleteReactArticle,
	updateArticle,
	updateReactArticle,
} from '../../services/db'

import {
	fetchArticlesSuccess,
	fetchArticlesFailure,
	fetchArticleSuccess,
	fetchArticleFailure,
	addArticleSuccess,
	addArticleFailure,
	updateArticleSuccess,
	updateArticleFailure,
	deleteArticleSuccess,
	deleteArticleFailure,
	deleteReactArticleSuccess,
	deleteReactArticleFailure,
	fetchReactArticlesSuccess,
	fetchReactArticlesFailure,
	fetchReactArticleSuccess,
	fetchReactArticleFailure,
} from '../reducers/articleSlice'

const module = 'articles'

export const fetchArticlesSaga = function* () {
	while (true) {
		try {
			yield take(`${module}/fetchAllArticles`)
			const resp = yield call(getArticles)
			yield put(fetchArticlesSuccess(resp))
		} catch (error) {
			yield put(fetchArticlesFailure(error))
		}
	}
}

export const fetchArticleSaga = function* () {
	while (true) {
		try {
			const action = yield take(`${module}/fetchArticleId`)
			const resp = yield call(getArticle, action.payload)
			yield put(fetchArticleSuccess(resp))
		} catch (error) {
			yield put(fetchArticleFailure(error))
		}
	}
}

export const fetchReactArticlesSaga = function* () {
	while (true) {
		try {
			yield take(`${module}/fetchAllReactArticles`)
			const resp = yield call(getReactArticles)

			yield put(fetchReactArticlesSuccess(resp))
		} catch (error) {
			yield put(fetchReactArticlesFailure(error))
		}
	}
}

export const fetchReactArticleSaga = function* () {
	while (true) {
		try {
			const action = yield take(`${module}/fetchReactArticleId`)
			const resp = yield call(getReactArticle, action.payload)
			yield put(fetchReactArticleSuccess(resp))
		} catch (error) {
			yield put(fetchReactArticleFailure(error))
		}
	}
}

export const addArticleSaga = function* () {
	while (true) {
		try {
			const action = yield take(`${module}/addArticle`)
			const key = yield call(generateKey)
			if (action.payload.type === 'reactjs') {
				const resp = yield call(addReactArticle, key, action.payload)
				yield put(addArticleSuccess(resp))
				yield put(push('/reactarticles'))
			} else {
				const resp = yield call(addArticle, key, action.payload)
				yield put(addArticleSuccess(resp))
				yield put(push('/articles'))
			}
		} catch (error) {
			yield put(addArticleFailure(error))
		}
	}
}

export const deleteReactArticleSaga = function* () {
	while (true) {
		try {
			const action = yield take(`${module}/deleteReactArticle`)
			yield call(deleteReactArticle, action.payload)
			yield put(deleteReactArticleSuccess(action.payload))
			yield put(push('/reactarticles'))
		} catch (err) {
			yield put(deleteReactArticleFailure(err))
		}
	}
}

export const deleteArticleSaga = function* () {
	while (true) {
		try {
			const action = yield take(`${module}/deleteArticle`)
			yield call(deleteArticle, action.payload)
			yield put(deleteArticleSuccess(action.payload))
			yield put(push('/articles'))
		} catch (err) {
			yield put(deleteArticleFailure(err))
		}
	}
}

export const updateArticleSaga = function* () {
	while (true) {
		const action = yield take(`${module}/updateArticle`)
		try {
			const resp = yield call(updateArticle, action.payload)
			yield put(updateArticleSuccess(resp))
			yield put(push(`/article/${action.payload.slug}`))
		} catch (err) {
			yield put(updateArticleFailure(err))
		}
	}
}

export const updateReactArticleSaga = function* () {
	while (true) {
		const action = yield take(`${module}/updateReactArticle`)

		try {
			const resp = yield call(updateReactArticle, action.payload)
			yield put(updateArticleSuccess(resp))
			yield put(push(`/reactarticle/${action.payload.slug}`))
		} catch (err) {
			yield put(updateArticleFailure(err))
		}
	}
}
export function* saga() {
	yield all([
		fetchArticlesSaga(),
		addArticleSaga(),
		fetchArticleSaga(),
		deleteArticleSaga(),
		deleteReactArticleSaga(),
		updateArticleSaga(),
		updateReactArticleSaga(),
		fetchReactArticlesSaga(),
		fetchReactArticleSaga(),
	])
}
