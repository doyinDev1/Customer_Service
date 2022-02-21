import { Workbook } from 'exceljs'
import * as fs from 'file-saver'

const RenderDownloadXLSXButton = ({ list, header, fileName, loopRef }) => {
	const generateExcel = () => {
		let data = []
		// loopTypes[loopRef](list, data)

		// Object.keys was not used ordinarily since some items were
		// may not contain certains keys at some point in timer
		// Hence flatMap and new Set to the rescue
		// console.log([...new Set(list.flatMap(Object.keys))])
		const listFieldsToDownload = [...new Set(list.flatMap(Object.keys))].filter(
			checkField
		)
		// This function is used in filtering the above list
		// Removes unwanted fields from the list
		function checkField(field) {
			return (
				field !== 'userID' &&
				field !== 'companyID' &&
				field !== 'courseID' &&
				field !== 'usertoken'
			)
		}

		for (let i = 0; i < list.length; i++) {
			let arr = [
				// Auto assign the list object keys as printable fields or excel columns
				listFieldsToDownload.map((field) => list[i][field]),
			]
			data.push(...arr)
		}

		// console.log(data, list, listFieldsToDownload)

		// Create workbook
		let workbook = new Workbook()

		// Create a named worksheet in the workbook
		let worksheet = workbook.addWorksheet(`${fileName.split('— ')[0]}`)

		// Add Header Row
		let headerRow = worksheet.addRow(listFieldsToDownload)

		// Cell Style : Fill and Border
		headerRow.eachCell((cell, number) => {
			cell.fill = {
				type: 'pattern',
				pattern: 'solid',
				fgColor: { argb: 'E9BA73' },
				// bgColor: { argb: 'FF0000FF' },
			}
			cell.border = {
				top: { style: 'thin' },
				left: { style: 'thin' },
				bottom: { style: 'thin' },
				right: { style: 'thin' },
			}
		})

		// Set desired column width for first column
		// worksheet.getColumn(1).width = 40

		// Set desired column width for other columns
		for (let i = 1; i <= worksheet.columnCount; i++) {
			worksheet.getColumn(i).width = 30
		}

		// Override column 2 width from loop action
		// if (loopRef === 'singleCourseReport') worksheet.getColumn(2).width = 40
		// if (loopRef === 'allCompanyEmployeeData') worksheet.getColumn(3).width = 40

		// Add all each array item in the data as row in the worksheet
		data.forEach((d) => {
			worksheet.addRow(d)
		})

		// Generate Excel File with given name
		workbook.xlsx.writeBuffer().then((data) => {
			let blob = new Blob([data], {
				type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
			})
			fs.saveAs(blob, `${fileName}.xlsx`)
		})
	}

	return (
		<button
			disabled={!list || !Array.isArray(list) || list.length < 1}
			onClick={() => generateExcel()}>
			Download XLSX
		</button>
	)
}

export default RenderDownloadXLSXButton

// const loopTypes = {
// 	allCompanyEmployeeData: function setExportKeysAndValues(list, data) {
// 		for (let i = 0; i < list.length; i++) {
// 			let arr = [
// 				list[i].employeeID,
// 				list[i].userFirstName,
// 				list[i].userLastname,
// 				list[i].userEmail,
// 				list[i].userGrade,
// 				list[i].userGender,
// 				list[i].location,
// 			]
// 			data.push(arr)
// 		}
// 		return data
// 	},
// 	allCoursesReport: function setExportKeysAndValues(list, data) {
// 		for (let i = 0; i < list.length; i++) {
// 			let arr = [
// 				list[i].courseName,
// 				list[i].enrolled,
// 				list[i].complete,
// 				list[i].incomplete,
// 				list[i].averageSum,
// 				list[i].averageRange,
// 			]
// 			data.push(arr)
// 		}
// 		return data
// 	},
// 	singleCourseReport: function setExportKeysAndValues(list, data) {
// 		for (let i = 0; i < list.length; i++) {
// 			let arr = [
// 				list[i].employeeID,
// 				list[i].usersName,
// 				list[i].moduleProgress,
// 				list[i].score,
// 				list[i].score_range,
// 				list[i].status,
// 			]
// 			data.push(arr)
// 		}
// 		return data
// 	},
// 	singleCandidateReport: function setExportKeysAndValues(list, data) {
// 		for (let i = 0; i < list.length; i++) {
// 			let arr = [
// 				list[i].courseName,
// 				list[i].started,
// 				list[i].moduleProgress,
// 				list[i].score,
// 				list[i].averageRange,
// 				list[i].status,
// 			]
// 			data.push(arr)
// 		}
// 		return data
// 	},
// }
