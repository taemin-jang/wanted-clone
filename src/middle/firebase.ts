// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import jobs from '@/data/jobs.json'
import targeting from '@/data/targeting.json'

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// Initialize JSON data
export const init = async () => {
	try {
		// jobs.data.forEach(
		// 	async (job) => await setDoc(doc(db, 'jobs', job.company.name), job),
		// )
		// targeting.data.forEach(
		// 	async (target) => await setDoc(doc(db, 'targeting', target.name), target),
		// )
	} catch (error) {
		console.log(error)
	}
}
