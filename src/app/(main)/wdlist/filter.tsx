import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

export default function Filter() {
	return (
		<section className='my-8 flex justify-between'>
			<div>
				<button className='w-28 border py-2.5 rounded mr-4 text-sm'>
					<span>지역</span>
					<span className='ml-4 text-blue-600 font-bold'>전세계</span>
				</button>
				<button className='w-28 border py-2 rounded mr-4 text-sm'>
					<span>경력</span>
					<span className='ml-4 text-blue-600 font-bold'>전체</span>
					<ArrowDropDownRoundedIcon />
				</button>
				<button className='w-28 border py-2 rounded mr-4 text-sm'>
					<span>기술스택</span>
					<span> </span>
					<ArrowDropDownRoundedIcon />
				</button>
			</div>
			<div>
				<button className='w-28 border flex justify-evenly items-center py-2 rounded text-sm'>
					<span>최신순</span>
					<span> </span>
					<ArrowDropDownRoundedIcon />
				</button>
			</div>
		</section>
	);
}
