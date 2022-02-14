import * as React from 'react'
import TablePagination from '@mui/material/TablePagination'

export default function TablePaginationDemo({
	page,
	setPage,
	rowsPerPage,
	setRowsPerPage,
	count,
}) {
	//Calculate number of pages in fetch request
	let pages = []
	for (let i = 1; i <= Math.ceil(count / rowsPerPage); i++) {
		pages.push(i)
	}

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	return (
		<TablePagination
			component='div'
			count={pages.length}
			page={page}
			onPageChange={handleChangePage}
			rowsPerPage={rowsPerPage}
			onRowsPerPageChange={handleChangeRowsPerPage}
		/>
	)
}
