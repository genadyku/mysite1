import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../components/page/HomePage'
import NavigationPage from '../components/page/NavigationPage'

import SigninPage from '../components/page/SigninPage'
import SignupPage from '../components/page/SignupPage'
import ForgotPasswordPage from '../components/page/ForgotPasswordPage'
import ResetPasswordPage from '../components/page/ResetPasswordPage'
import ReactArticlesPage from '../components/page/ReactArticlesPage'
import ReactArticlePage from '../components/page/ReactArticlePage'
import ArticlesPage from '../components/page/ArticlesPage'
import ArticlePage from '../components/page/ArticlePage'
import EditArticlesPage from '../components/page/EditArticlesPage'
import EditReactArticlesPage from '../components/page/EditReactArticlesPage'
import UpdateArticlePage from '../components/page/UpdateArticlePage'
import UpdateReactArticlePage from '../components/page/UpdateReactArticlePage'
import AddArticlePage from '../components/page/AddArticlePage'

import NotFound from '../components/commons/NotFound'
import PrivateRoute from '../components/commons/components/PrivateRoute'

import '../App.css'

const routes = (
	<>
		<NavigationPage />
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route path='/articles' component={ArticlesPage} />
			<Route path='/article/:slug' component={ArticlePage} />
			<PrivateRoute path='/reactarticles' component={ReactArticlesPage} />
			<PrivateRoute path='/reactarticle/:slug' component={ReactArticlePage} />
			<Route path='/login' component={SigninPage} />
			<Route path='/signup' component={SignupPage} />
			<Route path='/signup' component={SignupPage} />
			<Route path='/forgot-password' component={ForgotPasswordPage} />
			<Route path='/reset-password' component={ResetPasswordPage} />
			<PrivateRoute path='/editArticles' component={EditArticlesPage} />
			<PrivateRoute
				path='/editReactArticles'
				component={EditReactArticlesPage}
			/>
			<Route path='/addArticle' component={AddArticlePage} />
			<Route path='/updateArticle/:slug' component={UpdateArticlePage} />
			<Route
				path='/updateReactArticle/:slug'
				component={UpdateReactArticlePage}
			/>
			<Route component={NotFound} />
		</Switch>
	</>
)

export default routes
