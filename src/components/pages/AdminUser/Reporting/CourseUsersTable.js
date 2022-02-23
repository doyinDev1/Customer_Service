import React from 'react';
import classes from './Reporting.module.css';
import common from '../../../../commonStyles/common.module.css';
// import { currentDateTime } from '../../../helpers/getCurrentTime'
// import RenderDownloadXLSXButton from '../../../helpers/generateExcelFile'
import { Spinner, Table } from 'react-bootstrap';
import MuiPagination from '../../../layout/TablePagination/MuiPagination';
// import DataStatusIndicator from '../../layout/AdminDataStatusNotes/DataStatusIndicator'

const CourseUsersTable = ({
	singleCourseReportStatus,
	singleCourseReport,
	// header,
	courseLabel,
	setPage,
	page,
	rowsPerPage,
	setRowsPerPage,
	gradeLabel,
	locationLabel,
	genderLabel,
}) => {
	// Table header row and XLSX header row
	const header = [
		'Employee ID',
		'Full Name',
		// 'Progress',
		'Score (%)',
		'Score Range (%)',
		'Assessment',
	];

	return (
		<div className={classes.CourseUsersTable}>
			<div className={common.TableWrapper}>
				<div className={common.TableExtras}>
					<h3>
						Total Count: {''}
						{singleCourseReportStatus === 'loading' ? (
							<Spinner />
						) : (
							singleCourseReport?.courseTableDetails?.length
						)}
					</h3>
					<div className={common.TableInputs}>
						{/* <input type='search' placeholder='Search' /> */}

						{/* <RenderDownloadXLSXButton
							list={singleCourseReport?.courseTableDetails}
							header={header}
							fileName={`${courseLabel} Overview ${currentDateTime()}`}
							loopRef="singleCourseReport"
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
						{singleCourseReportStatus === 'success' &&
							Array.isArray(singleCourseReport?.courseTableDetails) &&
							singleCourseReport?.courseTableDetails?.length >= 1 &&
							singleCourseReport?.courseTableDetails?.map((emp) => (
								<tr key={emp.employeeID}>
									<td>{emp.employee_id}</td>
									<td>{emp.name}</td>
									{/* <td>{Number(emp?.moduleProgress?.split('/')[0]) * 100}%</td> */}
									<td>{emp.score}</td>
									<td>{emp.averageRange ? emp.averageRange : '-'}</td>
									<td>
										<button className={`${classes[`${emp.status}`]}`}>{emp.status}</button>
									</td>
								</tr>
							))}
					</tbody>
				</Table>
				{singleCourseReport?.courseTableDetails?.length >= 1 && (
					<MuiPagination
						page={page}
						setPage={setPage}
						rowsPerPage={rowsPerPage}
						setRowsPerPage={setRowsPerPage}
						count={singleCourseReport && singleCourseReport?.totalUsers}
					/>
				)}
			</div>

			{/* <DataStatusIndicator
				status={singleCourseReportStatus}
				dataNode1={singleCourseReport?.courseTableDetails}
				dataNode2={singleCourseReport?.courseTableDetails}
				noDataMessage={
					groupLabel || roleLabel || gradeLabel || locationLabel || genderLabel
						? 'Oops... Filters did not return any data. Try something else'
						: 'Course has no candidate records'
				}
			/> */}
		</div>
	);
};

export default CourseUsersTable;
