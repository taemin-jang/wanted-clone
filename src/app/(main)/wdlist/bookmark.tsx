import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp'
import Link from 'next/link'

export default function BookMark() {
	return (
		<Link href={'/bookmarks'}>
			<BookmarkSharpIcon color='primary' />
			<span className='text-primary-light font-bold'>
				북마크 모아보기 {'>'}
			</span>
		</Link>
	)
}
