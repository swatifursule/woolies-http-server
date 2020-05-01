import dotenv from 'dotenv'
import admin from 'firebase-admin'

dotenv.config()

const adminApp = admin.initializeApp({
	credential: admin.credential.applicationDefault(),
	databaseURL: 'https://insight-timer-demo.firebaseio.com'
})

export default adminApp
