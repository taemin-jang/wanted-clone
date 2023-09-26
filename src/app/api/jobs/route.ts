import { NextResponse } from 'next/server'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/middle/firebase'
import getWanted from '@/utils/getWanted'

export async function GET() {
	const snapShot = await getDoc(doc(db, 'jobs', 'jobsData'))
	// const snapShot = await getWanted(`/v4/jobs?country=kr&${params.id}`)
	return NextResponse.json(snapShot.data())
}
