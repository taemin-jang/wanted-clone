import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

export default function Loading() {
	return (
		<Grid
			container
			wrap='nowrap'>
			{Array.from(new Array(4)).map((item, index) => (
				<Box
					key={index}
					sx={{ width: 250, marginRight: 10, my: 5 }}>
					{item ? (
						<img
							style={{ width: 250, height: 118 }}
							alt={item.title}
							src={item.src}
						/>
					) : (
						<Skeleton
							variant='rectangular'
							width={210}
							height={118}
						/>
					)}
					{item ? (
						<Box sx={{ pr: 2 }}>
							<Typography
								gutterBottom
								variant='body2'>
								{item.title}
							</Typography>
							<Typography
								display='block'
								variant='caption'
								color='text.secondary'>
								{item.channel}
							</Typography>
							<Typography
								variant='caption'
								color='text.secondary'>
								{`${item.views} • ${item.createdAt}`}
							</Typography>
						</Box>
					) : (
						<Box sx={{ pt: 0.5 }}>
							<Skeleton />
							<Skeleton width='60%' />
						</Box>
					)}
				</Box>
			))}
		</Grid>
	);
}
