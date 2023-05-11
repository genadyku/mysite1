import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

import firebaseConfig from '../config'

firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const storage = getStorage()
export const db = getFirestore()
