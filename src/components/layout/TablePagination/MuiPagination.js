import Pagination from '@mui/material/Pagination'
import useWindowDimensions from '../../UseWindowSize/UseWindowSize'

const MuiPagination = ({
	page,
	setPage,
	rowsPerPage,
	// setRowsPerPage,
	count,
}) => {
	const windowDimensions = useWindowDimensions()

	//Calculate number of pages in fetch request
	let pages = []
	for (let i = 1; i <= Math.ceil(count / rowsPerPage); i++) {
		pages.push(i)
	}

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'flex-end',
			}}>
			<Pagination
				count={pages.length}
				page={page}
				onChange={handleChangePage}
				// variant='outlined'
				color='standard'
				// shape='rounded'
				size={`${windowDimensions.width <= 768 ? '' : 'large'}`}
				showFirstButton
				showLastButton
			/>
		</div>
	)
}

export default MuiPagination
