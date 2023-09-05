import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

export default function WdList() {
	return (
		<div className='max-w-wanted mt-10 m-auto'>
			<div className='flex items-center'>
				<div>
					<span className='text-2xl font-bold mr-4'>개발</span>
					<span>
						<ExpandCircleDownOutlinedIcon fontSize='large' />
					</span>
				</div>
				<div className=' before:content-["|"] before:px-4 before:text-gray-300 before:text-2xl'>
					<span className='text-2xl mr-4'>개발 전체</span>
					<span>
						<ExpandCircleDownOutlinedIcon fontSize='large' />
					</span>
				</div>
			</div>
		</div>
	);
}
