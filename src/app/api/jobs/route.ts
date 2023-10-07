import { NextRequest, NextResponse } from 'next/server'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/middle/firebase'
import getWanted from '@/utils/getWanted'

export async function GET(request: NextRequest) {
	// const snapShot = await getDoc(doc(db, 'jobs', 'jobsData'))
	const query = [...request.nextUrl.searchParams.values()]
		.map((v) => `tag_type_ids=${v}`)
		.join('&')
	const snapShot = await getWanted(`/v4/jobs?country=kr&${query}`)
	// return NextResponse.json(snapShot.data())
	return NextResponse.json(snapShot)
}
