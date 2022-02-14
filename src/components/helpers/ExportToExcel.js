import * as FileSaver from 'file-saver'
import * as XLSX from 'xlsx'
// import { CloudDownload } from '@material-ui/icons'
import { FileDownload } from '@mui/icons-material'

export const ExportToExcel = ({ apiData, fileName }) => {
	const fileType =
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
	const fileExtension = '.xlsx'

	const exportToCSV = async (apiData, fileName) => {
		const ws = XLSX.utils.json_to_sheet(apiData)
		const wb = { Sheets: { data: ws }, SheetNames: ['data'] }
		const excelBuffer = await XLSX.write(wb, {
			bookType: 'xlsx',
			type: 'array',
		})
		const data = new Blob([excelBuffer], { type: fileType })
		FileSaver.saveAs(data, fileName + fileExtension)
	}

	return (
		<button
			onClick={(e) => exportToCSV(apiData, fileName)}
			disabled={!apiData || !Array.isArray(apiData) || apiData?.length < 1}>
			<FileDownload style={{ fontSize: '20px' }} /> Download CSV
		</button>
	)
}

//ISOLATED EXPORT FOR CERTAIN USE CASES E.G SERVER SIDE PAGINATED DATA
export const exportToCSV = async (apiData, fileName) => {
	const fileType =
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
	const fileExtension = '.xlsx'

	const ws = XLSX.utils.json_to_sheet(apiData)
	const wb = { Sheets: { data: ws }, SheetNames: ['data'] }
	const excelBuffer = await XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
	const data = new Blob([excelBuffer], { type: fileType })
	FileSaver.saveAs(data, fileName + fileExtension)
}
