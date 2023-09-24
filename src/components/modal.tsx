import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { useModalStateContext, useModalDispatchContext } from '@/contexts/modal'

interface ModalType {
	modalTitle: string
	modalContent: string
	children?: React.ReactNode
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
}

export default function ModalComponent({
	modalTitle,
	modalContent,
	children,
}: ModalType) {
	const state = useModalStateContext()
	const dispatch = useModalDispatchContext()

	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={state.value}
				onClose={() => dispatch({ type: 'close' })}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}>
				<Fade in={state.value}>
					<Box sx={style}>
						<Typography
							id='transition-modal-title'
							variant='h6'
							component='h2'>
							{modalTitle}
						</Typography>
						<Typography
							id='transition-modal-description'
							sx={{ mt: 2 }}>
							{modalContent}
						</Typography>
						{children}
					</Box>
				</Fade>
			</Modal>
		</div>
	)
}
