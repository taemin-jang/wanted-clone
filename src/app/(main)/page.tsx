import { init } from '@/middle/firebase'

export default function Main() {
	init()
	return (
		<div className='mt-10'>
			<h1>main page 입니다.</h1>
		</div>
	)
}
