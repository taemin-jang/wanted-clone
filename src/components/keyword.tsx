import { Data, onClick } from '@/types/job-filter'

export default function Keyword({
	datas,
	onClick,
}: {
	datas: Data[]
	onClick?: onClick
}) {
	return (
		<>
			{datas.map((data) => (
				<span
					key={data.query.value}
					className={data.style}>
					<button
						onClick={() =>
							onClick && onClick(data.query.key, data.query.value)
						}>
						{data.keyword}
					</button>
				</span>
			))}
		</>
	)
}
