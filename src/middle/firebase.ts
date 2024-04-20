// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import jobs from '@/data/jobs.json'
import targeting from '@/data/targeting.json'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
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
