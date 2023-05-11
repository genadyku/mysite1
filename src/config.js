const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_BASE_URL_KEY,
	authDomain: process.env.REACT_APP_AUT_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSGE_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

export default firebaseConfig
