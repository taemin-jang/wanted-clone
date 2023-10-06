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
} from 'firebase/firestore'
import { db } from '@/middle/firebase'
import { Job } from '@/types/wanted-api'
export async function GET() {
	const snapShot = await getDocs(collection(db, 'bookmarks'))
	const data: any = []
	const idArr: any = []
	snapShot.forEach((doc) => {
		data.push(doc.data())
		idArr.push(doc.id)
	})
	return NextResponse.json({ data, idArr })
}

export async function POST(request: NextRequest) {
	const docID: Job = await request.json()
	// 중복 제거 로직
	if (
		await getDocs(
			query(collection(db, 'bookmarks'), where('id', '!=', docID.id)),
		)
	) {
		await setDoc(doc(db, 'bookmarks', `${docID.id}`), docID)
	}
	return NextResponse.json('ok')
}

export async function DELETE(request: Request) {
	const docID: Job = await request.json()
	await deleteDoc(doc(db, 'bookmarks', `${docID}`))
	return NextResponse.json('ok')
}
