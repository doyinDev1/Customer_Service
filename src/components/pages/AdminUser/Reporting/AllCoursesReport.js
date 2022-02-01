import { Cancel, Clear, LibraryBooksOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
// import {
// 	useFecthCompanyFilters,
// 	useFetchCompanyCoursesReports,
// } from '../../../DataQueries/companyHooks/fetch'
import SelectDropDown from '../../../layout/DropDown/SelectDropDown';
import classes from './Reporting.module.css';
import common from '../../../../commonStyles/common.module.css';
// import DataStatusIndicator from '../../layout/AdminDataStatusNotes/DataStatusIndicator'
// import { currentDateTime } from '../../../helpers/getCurrentTime'
// import { exportAllCoursesReportData } from '../../../helpers/exportTableData'
// import { ExportToExcel } from '../../../helpers/ExportToExcel'
import { IconButton } from '@mui/material';
// import generateExcel from '../../../helpers/generateExcelFile'
// import RenderDownloadXLSXButton from '../../../helpers/generateExcelFile'

const AllCoursesReport = () => {
	const [groupLabel, setGroupLabel] = useState('');
	const [roleLabel, setRoleLabel] = useState('');
	const [gradeLabel, setGradeLabel] = useState('');
	const [locationLabel, setLocationLabel] = useState('');
	const [genderLabel, setGenderLabel] = useState('');

	// const { status: companyCoursesReportsStatus, data: companyCoursesReports } =
	// 	useFetchCompanyCoursesReports(
	// 		groupLabel,
	// 		genderLabel,
	// 		locationLabel,
	// 		roleLabel,
	// 		gradeLabel
	// 	)
	// const { status: companyFiltersStatus, data: companyFilters } =
	// 	useFecthCompanyFilters()

	const removeAllFilters = () => {
		setGroupLabel('');
		setRoleLabel('');
		setGradeLabel('');
		setLocationLabel('');
		setGenderLabel('');
	};

	const removeSpecificFilters = (filterType) => {
		if (filterType === groupLabel) setGroupLabel('');
		if (filterType === roleLabel) setRoleLabel('');
		if (filterType === gradeLabel) setGradeLabel('');
		if (filterType === locationLabel) setLocationLabel('');
		if (filterType === genderLabel) setGenderLabel('');
	};

	const renderFilteringByTag = () => {
		if (!groupLabel && !roleLabel && !gradeLabel && !locationLabel && !genderLabel) {
			return ' ';
		} else {
			return (
				<span style={{ fontSize: '12px', fontWeight: '600', marginRight: '10px' }}>
					Filtering By:{' '}
				</span>
			);
		}
	};

	const selectedfilters = [groupLabel, roleLabel, gradeLabel, locationLabel, genderLabel];

	const header = [
		'Course Title',
		'No. Enrolled',
		'No. Completed',
		'No. Not Completed',
		'Avg. Score (%)',
		'Score Range (%)',
	];

	return (
		<div className={classes.SubContainer}>
			<div className={classes.InnerContainer}>
				<div className={classes.CourseFilters}>
					<SelectDropDown
						legend="groups"
						label={groupLabel}
						// status={companyFilters?.errorRes}
						// options={
						// 	companyFiltersStatus === 'success' && [
						// 		'None',
						// 		...companyFilters?.groups.map((n) => n.groupName),
						// 	]
						// }
						setFilterBy={setGroupLabel}
						removeSpecificFilters={removeSpecificFilters}
					/>
					<SelectDropDown
						legend="roles"
						label={roleLabel}
						// status={companyFilters?.errorRes}
						// options={
						// 	companyFiltersStatus === 'success' && [
						// 		'None',
						// 		...companyFilters?.roles.map((n) => n.roleName),
						// 	]
						// }
						setFilterBy={setRoleLabel}
						removeSpecificFilters={removeSpecificFilters}
					/>
					<SelectDropDown
						legend="grades"
						label={gradeLabel}
						// status={companyFilters?.errorRes}
						// options={
						// 	companyFiltersStatus === 'success' && [
						// 		'None',
						// 		...companyFilters?.grades.map((n) => n.userGrade),
						// 	]
						// }
						setFilterBy={setGradeLabel}
						removeSpecificFilters={removeSpecificFilters}
					/>
					<SelectDropDown
						legend="locations"
						label={locationLabel}
						// status={companyFilters?.errorRes}
						// options={
						// 	companyFiltersStatus === 'success' && [
						// 		'None',
						// 		...companyFilters?.locations.map((n) => n.location),
						// 	]
						// }
						setFilterBy={setLocationLabel}
						removeSpecificFilters={removeSpecificFilters}
					/>
					<SelectDropDown
						legend="gender"
						label={genderLabel}
						// status={companyFilters?.errorRes}
						// options={companyFiltersStatus === 'success' && ['None', ...companyFilters?.genders]}
						setFilterBy={setGenderLabel}
						removeSpecificFilters={removeSpecificFilters}
					/>
				</div>

				<div className={classes.CompanyItems}>
					<div>
						{renderFilteringByTag()}
						{selectedfilters.map(
							(filter) =>
								filter && (
									<span className={classes.FilterButton}>
										{filter}
										<IconButton onClick={() => removeSpecificFilters(filter)}>
											<Clear
												style={{
													fontSize: '14px',
												}}
											/>
										</IconButton>
									</span>
								)
						)}
						{(groupLabel || roleLabel || gradeLabel || locationLabel || genderLabel) && (
							<Cancel
								onClick={removeAllFilters}
								style={{ color: '#777', fontSize: '17px', marginLeft: '10px' }}
							/>
						)}
					</div>
					<div className={common.TableWrapper}>
						<div className={common.TableExtras}>
							<h3>
								Total Count:{' '}
								{/* {companyCoursesReportsStatus === 'loading' ? (
									<Spinner />
								) : (
									companyCoursesReports?.length
								)} */}
							</h3>
							<div className={common.TableInputs}>
								{/* <input type='search' placeholder='Search' /> */}

								{/* <RenderDownloadXLSXButton
									list={companyCoursesReports}
									header={header}
									fileName={`All Courses Report ${currentDateTime()}`}
									loopRef='allCoursesReport'
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
								{/* {companyCoursesReportsStatus === 'success' &&
									Array.isArray(companyCoursesReports) &&
									companyCoursesReports.length >= 1 &&
									companyCoursesReports?.map((report, index) => (
										<tr key={index}>
											<td>{report.courseName}</td>
											<td>{report.enrolled}</td>
											<td>{report.complete}</td>
											<td>{report.incomplete}</td>
											<td>{report.averageSum ? report.averageSum : 0}</td>
											<td>{report.averageRange ? report.averageRange : 0}</td>
										</tr>
									))} */}
							</tbody>
						</Table>
					</div>
					{/* <DataStatusIndicator
						status={companyCoursesReportsStatus}
						dataNode1={companyCoursesReports}
						dataNode2={companyCoursesReports}
						Icon={LibraryBooksOutlined}
						noDataMessage={
							groupLabel || roleLabel || gradeLabel || locationLabel || genderLabel
								? 'Oops... Filters did not return any data. Try something else'
								: 'No data found'
						}
					/> */}
				</div>
			</div>
		</div>
	);
};

export default AllCoursesReport;
