import { firestore, auth } from './firebase'

export async function signIn(email, password) {
	const user = await auth.signInWithEmailAndPassword(email, password)

	return user
}

export async function addUser(id, user) {
	const users = await firestore.collection('users').doc(id).set(user)
	return users
}

export async function signUp(email, password) {
	const user = await auth.createUserWithEmailAndPassword(email, password)

	return user
}
export async function getArticles() {
	const snapshot = await firestore.collection('articles').get()
	const articles = []
	snapshot.forEach((doc) => {
		articles.push({ id: doc.id, ...doc.data() })
	})

	return articles
}

export async function getReactArticles() {
	const snapshot = await firestore.collection('reactarticles').get()
	const articles = []
	snapshot.forEach((doc) => {
		articles.push({ id: doc.id, ...doc.data() })
	})

	return articles
}

export async function forgotPassword(email) {
	await auth.sendPasswordResetEmail(email)
}

export async function confirmThePasswordReset(oobCode, newPassword) {
	if (!oobCode && !newPassword) return
	await auth.confirmPasswordReset(oobCode, newPassword)
}

/*
export async function getArticle(slug) {
	const snapshot = await firestore
		.collection('articles')
		.where('slug', '==', slug)
		.get()
	let article = {}

	snapshot.forEach((doc) => {
		article = doc.data()
	})
	return article
}
*/
export async function getArticle(slug) {
	try {
		const snapshot = await firestore
			.collection('articles')
			.where('slug', '==', slug)
			.get()
		let article = {}

		snapshot.forEach((doc) => {
			article = { id: doc.id, ...doc.data() }
		})

		return article
	} catch (error) {
		console.log(error)
	}
}

export async function getReactArticle(slug) {
	try {
		const snapshot = await firestore
			.collection('reactarticles')
			.where('slug', '==', slug)
			.get()
		let article = {}

		snapshot.forEach((doc) => {
			article = { id: doc.id, ...doc.data() }
		})

		return article
	} catch (error) {
		console.log(error)
	}
}
export const addArticle = (id, article) =>
	firestore.collection('articles').doc(id).set(article)

export const addReactArticle = (id, article) =>
	firestore.collection('reactarticles').doc(id).set(article)

export const generateKey = () => firestore.collection('articles').doc().id

export const updateArticle = (article) =>
	firestore.collection('articles').doc(article.id).set(article)

export const updateReactArticle = (article) =>
	firestore.collection('reactarticles').doc(article.id).set(article)

export const deleteArticle = (id) =>
	firestore.collection('articles').doc(id).delete()

export const deleteReactArticle = (id) =>
	firestore.collection('reactarticles').doc(id).delete()

export async function getUser(uid) {
	try {
		const userRef = firestore.collection('users').doc(uid)
		const user = await userRef.get()
		if (!user.exists) {
			console.log('No such document!')
		} else {
			console.log('Document data:', user.data())
		}
		return user
	} catch (error) {
		console.log('error=>', error)
	}
}

export async function signOut() {
	await auth.signOut()
}
