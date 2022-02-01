import React, { useState, useEffect } from 'react';
import classes from './Reporting.module.css';
import common from '../../../../commonStyles/common.module.css';
// import { currentDateTime } from '../../../helpers/getCurrentTime'
// import RenderDownloadXLSXButton from '../../../helpers/generateExcelFile'
import { Spinner, Table } from 'react-bootstrap';
import MuiPagination from '../../../layout/TablePagination/MuiPagination';
// import DataStatusIndicator from '../../layout/AdminDataStatusNotes/DataStatusIndicator'
import SelectDropDown from '../../../layout/DropDown/SelectDropDown';
// import {
// 	useFetchSingleCourseModuleReport,
// 	useFetchUserCourseModules,
// } from '../../../DataQueries/companyHooks/fetch'

const CourseModuleUsersTable = ({
	singleCourseReportStatus,
	singleCourseReport,
	courseLabel,
	rowsPerPage,
	setRowsPerPage,
	groupLabel,
	roleLabel,
	gradeLabel,
	locationLabel,
	genderLabel,
	courseID,
}) => {
	const [moduleNames, setModuleNames] = useState([]);
	const [page, setPage] = useState(1);
	const [courseModuleLabel, setCourseModuleLabel] = useState('');
	const [selectedModuleID, setSelectedModuleID] = useState(null);

	// const { status: courseModuleDataStatus, data: courseModuleData } =
	// 	useFetchUserCourseModules(courseID)

	// const {
	// 	isFetching,
	// 	status: singleCourseModuleReportStatus,
	// 	data: singleCourseModuleReport,
	// } = useFetchSingleCourseModuleReport(
	// 	selectedModuleID,
	// 	groupLabel,
	// 	genderLabel,
	// 	locationLabel,
	// 	roleLabel,
	// 	gradeLabel,
	// 	page
	// )

	// useEffect(() => {
	// 	setModuleNames(
	// 		courseModuleDataStatus === 'success' &&
	// 			Array.isArray(courseModuleData?.modules) &&
	// 			courseModuleData?.modules?.map((module) => module.moduleName)
	// 	)
	// }, [courseModuleDataStatus, courseModuleData])

	//set default module name and module ID
	// useEffect(() => {
	// 	// const firstCompanyCourseAsDefault = courseNames && courseNames[0]
	// 	const randomCourseModule =
	// 		moduleNames && moduleNames[Math.floor(Math.random() * moduleNames.length)]
	// 	const randomCourseModuleIDAsDeafult =
	// 		courseModuleData?.modules &&
	// 		courseModuleData?.modules?.find(
	// 			(course) => course.courseName === randomCourseModule
	// 		)?.courseID
	// 	setSelectedModuleID(randomCourseModuleIDAsDeafult)
	// 	setCourseModuleLabel(randomCourseModule)
	// }, [moduleNames, courseModuleData?.modules])

	//set selected module ID from name find comparison on course modules
	// const getID = (moduleName) => {
	// 	setSelectedModuleID(
	// 		courseModuleData?.modules?.find(
	// 			(module) => module.moduleName === moduleName
	// 		)?.moduleID
	// 	)
	// }

	// Table header row and XLSX header row
	const header = ['Employee ID', 'Full Name', 'Attempts', 'Max. Score (%)', 'Status'];

	return (
		<div className={classes.CourseUsersTable}>
			<div className={common.TableWrapper}>
				<div className={common.TableExtras}>
					<div className={classes.ModuleSelectContainer}>
						<SelectDropDown legend="Course modules" />
					</div>

					<h3>
						Total Count: {''}
						{/* {courseModuleDataStatus === 'loading' ? (
							<Spinner />
						) : (
							singleCourseReport?.courseTableDetails?.length
						)} */}
					</h3>
					<div className={common.TableInputs}>
						{/* <input type='search' placeholder='Search' /> */}

						{/* <RenderDownloadXLSXButton
							list={singleCourseReport?.courseTableDetails}
							header={header}
							fileName={`${courseLabel} Overview ${currentDateTime()}`}
							loopRef='singleCourseReport'
						/> */}
					</div>
				</div>
				<Table className={common.Table} hover responsive>
					<thead>
						<tr>
							{header.map((n) => (
								<th key={n}> {n} </th>
							))}
						</tr>
					</thead>

					<tbody>
						{/* {singleCourseModuleReportStatus === 'success' &&
							Array.isArray(singleCourseModuleReport?.courseTableDetails) &&
							singleCourseModuleReport?.courseTableDetails?.length >= 1 &&
							singleCourseModuleReport?.courseTableDetails?.map((emp) => (
								<tr key={emp.employeeID}>
									<td>{emp.employeeID}</td>
									<td>{emp.usersName}</td>
									<td>{emp.attempts}</td>
									<td>{emp.maxScore}</td>
									<td>
										<button className={`${classes[`${emp.status}`]}`}>
											{emp.status}
										</button>
									</td>
								</tr>
							))} */}
					</tbody>
				</Table>
				{/* {singleCourseModuleReport?.courseTableDetails?.length >= 1 && (
					<MuiPagination
						page={page}
						setPage={setPage}
						rowsPerPage={rowsPerPage}
						setRowsPerPage={setRowsPerPage}
						count={singleCourseReport && singleCourseReport?.totalUsers}
					/>
				)} */}
			</div>

			{/* <DataStatusIndicator
				status={singleCourseModuleReportStatus}
				dataNode1={singleCourseModuleReport?.courseTableDetails}
				dataNode2={singleCourseModuleReport?.courseTableDetails}
				noDataMessage={
					groupLabel || roleLabel || gradeLabel || locationLabel || genderLabel
						? 'Oops... Filters did not return any data. Try something else'
						: 'Course has no candidate records'
				}
			/> */}
		</div>
	);
};

export default CourseModuleUsersTable;
