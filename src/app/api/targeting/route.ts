import { NextResponse } from 'next/server'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/middle/firebase'
import getWanted from '@/utils/getWanted'

export async function GET() {
	// const snapShot = await getDoc(doc(db, 'targeting', 'targetingData'))
	// return NextResponse.json(snapShot.data())
	const snapShot = await getWanted(`/v4/advertising/targeting?tag_type_ids=518`)
	return NextResponse.json(snapShot)
}
