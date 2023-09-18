import { NextRequest, NextResponse } from 'next/server'
import getWanted from '@/utils/getWanted'

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } },
) {
	const jobDetail = await getWanted(`/v4/jobs/${params.id}`)

	return NextResponse.json(jobDetail)
}
