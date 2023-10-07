export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import {
	doc,
	getDocs,
	collection,
	setDoc,
	query,
	where,
	deleteDoc,
	getDoc,
} from 'firebase/firestore'
import { db } from '@/middle/firebase'
import { Job } from '@/types/wanted-api'
export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } },
) {
	const snapShot = await getDoc(doc(db, 'bookmarks', params.id))
	if (snapShot.exists()) {
		return NextResponse.json(true)
	} else {
		return NextResponse.json(false)
	}
}
