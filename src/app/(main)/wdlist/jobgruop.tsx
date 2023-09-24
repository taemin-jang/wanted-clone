import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
export default function JobGroup() {
	return (
		<div className='flex items-center'>
			<div className='flex items-center'>
				<span className='text-2xl font-bold mr-4 leading-none'>전체</span>
				<span>
					<KeyboardArrowDownIcon
						// fontSize='large'
						className='border rounded-full'
					/>
				</span>
			</div>
			<div className='flex items-center before:content-["|"] before:px-4 before:text-gray-300 before:text-2xl'>
				<span className='text-2xl mr-4 leading-none'>직군을 선택해주세요.</span>
				<span>
					<KeyboardArrowDownIcon
						// fontSize='large'
						className='border rounded-full'
					/>
				</span>
			</div>
		</div>
	)
}
