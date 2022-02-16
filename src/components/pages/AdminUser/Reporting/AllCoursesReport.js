import { Cancel, Clear, LibraryBooksOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useFecthFilters, useFetchCoursesReports } from '../../../../DataQueries/adminHooks/fetch';
import SelectDropDown from '../../../layout/DropDown/SelectDropDown';
import classes from './Reporting.module.css';
import common from '../../../../commonStyles/common.module.css';
import DataStatusIndicator from '../../../layout/DataStatusIndicator/DataStatusIndicator';
// import { currentDateTime } from '../../../helpers/getCurrentTime'
// import { exportAllCoursesReportData } from '../../../helpers/exportTableData'
// import { ExportToExcel } from '../../../helpers/ExportToExcel'
import { IconButton } from '@mui/material';
// import generateExcel from '../../../helpers/generateExcelFile'
// import RenderDownloadXLSXButton from '../../../helpers/generateExcelFile'

const AllCoursesReport = () => {
	const [gradeLabel, setGradeLabel] = useState('');
	const [locationLabel, setLocationLabel] = useState('');
	const [genderLabel, setGenderLabel] = useState('');

	const { status: coursesReportsStatus, data: coursesReports } = useFetchCoursesReports(
		genderLabel,
		locationLabel,
		gradeLabel
	);
	const { status: filtersStatus, data: filters } = useFecthFilters();

	const removeAllFilters = () => {
		setGradeLabel('');
		setLocationLabel('');
		setGenderLabel('');
	};

	const removeSpecificFilters = (filterType) => {
		if (filterType === gradeLabel) setGradeLabel('');
		if (filterType === locationLabel) setLocationLabel('');
		if (filterType === genderLabel) setGenderLabel('');
	};

	const renderFilteringByTag = () => {
		if (!gradeLabel && !locationLabel && !genderLabel) {
			return ' ';
		} else {
			return (
				<span style={{ fontSize: '12px', fontWeight: '600', marginRight: '10px' }}>
					Filtering By:{' '}
				</span>
			);
		}
	};

	const selectedfilters = [gradeLabel, locationLabel, genderLabel];

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
						legend="grades"
						label={gradeLabel}
						status={filters?.errorRes}
						options={filtersStatus === 'success' && ['None', ...filters?.grade.map((n) => n.grade)]}
						setFilterBy={setGradeLabel}
						removeSpecificFilters={removeSpecificFilters}
					/>
					<SelectDropDown
						legend="locations"
						label={locationLabel}
						status={filters?.errorRes}
						options={
							filtersStatus === 'success' && ['None', ...filters?.locations.map((n) => n.location)]
						}
						setFilterBy={setLocationLabel}
						removeSpecificFilters={removeSpecificFilters}
					/>
					<SelectDropDown
						legend="gender"
						label={genderLabel}
						status={filters?.errorRes}
						options={filtersStatus === 'success' && ['None', ...filters?.gender]}
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
						{(gradeLabel || locationLabel || genderLabel) && (
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
								{coursesReportsStatus === 'loading' ? <Spinner /> : coursesReports?.length}
							</h3>
							<div className={common.TableInputs}>
								{/* <input type='search' placeholder='Search' /> */}

								{/* <RenderDownloadXLSXButton
									list={coursesReports}
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
								{coursesReportsStatus === 'success' &&
									Array.isArray(coursesReports) &&
									coursesReports.length >= 1 &&
									coursesReports?.map((report, index) => (
										<tr key={index}>
											<td>{report.course_name}</td>
											<td>{report.enrolled}</td>
											<td>{report.complete}</td>
											<td>{report.incomplete}</td>
											<td>{report.averageSum ? report.averageSum : 0}</td>
											<td>{report.averageRange ? report.averageRange : 0}</td>
										</tr>
									))}
							</tbody>
						</Table>
					</div>
					<DataStatusIndicator
						status={coursesReportsStatus}
						dataNode1={coursesReports}
						dataNode2={coursesReports}
						Icon={LibraryBooksOutlined}
						noDataMessage={
							gradeLabel || locationLabel || genderLabel
								? 'Oops... Filters did not return any data. Try something else'
								: 'No data found'
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default AllCoursesReport;
