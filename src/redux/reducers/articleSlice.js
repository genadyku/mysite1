import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	posts: [],
	post: {},
	loading: false,
	error: null,
}

export const articleSlice = createSlice({
	name: 'articles',
	initialState,

	reducers: {
		fetchArticleId: (state) => {
			state.posts = null
			state.post = null
			state.loading = true
		},
		fetchArticleSuccess: (state, articles) => {
			state.posts = null
			state.post = articles.payload
			state.loading = false
			state.error = null
		},
		fetchArticleFailure: (state, action) => {
			state.post = null
			state.loading = false
			state.error = action.payload
		},
		fetchAllArticles: (state) => {
			state.posts = null
			state.loading = true
		},
		fetchArticlesSuccess: (state, articles) => {
			state.posts = articles.payload
			state.loading = false
			state.error = null
		},
		fetchArticlesFailure: (state, action) => {
			state.posts = null
			state.loading = false
			state.error = action.payload
		},
		addArticle: (action, data) => {
			action.payload = data
		},
		addArticleSuccess: (action, data) => {
			action.payload = data
		},
		addArticleFailure: (state, action) => {
			state.posts = null
			state.loading = false
			state.error = action.payload
		},
		updateArticle: (state) => {
			state.posts = null
			state.loading = true
		},
		updateArticleSuccess: (action, data) => {
			action.payload = data
		},
		updateArticleFailure: (state, action) => {
			state.posts = null
			state.loading = false
			state.error = action.payload
		},
		updateReactArticle: (state) => {
			state.posts = null
			state.loading = true
		},
		updateReactArticleSuccess: (action, data) => {
			action.payload = data
		},
		updateReactArticleFailure: (state, action) => {
			state.posts = null
			state.loading = false
			state.error = action.payload
		},

		deleteArticle: (state) => {
			state.loading = true
		},
		deleteArticleSuccess: (state, action) => {
			state.loading = false
			state.posts = state.posts.filter((post) => post.id !== action.payload)
		},
		deleteArticleFailure: (state, action) => {
			state.posts = null
			state.loading = false
			state.error = action.payload
		},
		deleteReactArticle: (state) => {
			state.loading = true
		},
		deleteReactArticleSuccess: (state, action) => {
			state.loading = false
			state.posts = state.posts.filter((post) => post.id !== action.payload)
		},
		deleteReactArticleFailure: (state, action) => {
			state.posts = null
			state.loading = false
			state.error = action.payload
		},
		fetchReactArticleId: (state) => {
			state.posts = null
			state.post = null
			state.loading = true
		},
		fetchReactArticleSuccess: (state, articles) => {
			state.posts = null
			state.post = articles.payload
			state.loading = false
			state.error = null
		},
		fetchReactArticleFailure: (state, action) => {
			state.post = null
			state.loading = false
			state.error = action.payload
		},
		fetchAllReactArticles: (state) => {
			state.posts = null
			state.loading = true
		},
		fetchReactArticlesSuccess: (state, articles) => {
			state.posts = articles.payload
			state.loading = false
			state.error = null
		},
		fetchReactArticlesFailure: (state, action) => {
			state.posts = null
			state.loading = false
			state.error = action.payload
		},
	},
})

export const {
	fetchAllArticles,
	fetchArticlesSuccess,
	fetchArticlesFailure,
	fetchArticleId,
	fetchArticleSuccess,
	fetchArticleFailure,
	addArticle,
	addArticleSuccess,
	addArticleFailure,
	updateArticle,
	updateArticleSuccess,
	updateArticleFailure,
	updateReactArticle,
	updateReactArticleSuccess,
	updateReactArticleFailure,
	deleteArticle,
	deleteArticleSuccess,
	deleteArticleFailure,
	deleteReactArticle,
	deleteReactArticleSuccess,
	deleteReactArticleFailure,
	fetchAllReactArticles,
	fetchReactArticlesSuccess,
	fetchReactArticlesFailure,
	fetchReactArticleId,
	fetchReactArticleSuccess,
	fetchReactArticleFailure,
} = articleSlice.actions
export default articleSlice.reducer
