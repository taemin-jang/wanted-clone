import { NextResponse } from 'next/server'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/middle/firebase'

export async function GET() {
	const snapShot = await getDoc(doc(db, 'jobs', 'jobsData'))
	return NextResponse.json({ jobs: snapShot.data(), id: snapShot.id })
}
