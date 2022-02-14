import { Cancel, Clear } from '@material-ui/icons';
import { useState, useEffect } from 'react';
// import { Spinner, Table } from 'react-bootstrap'
// import DonutChart from '../../layout/Charts/DonutChart'
// import Bar from '../../layout/Charts/BarChart'
// import {
// 	useFecthCompanyFilters,
// 	useFetchAssignmentCourses,
// 	useFetchSingleCourseReport,
// } from '../../../DataQueries/companyHooks/fetch';
import SelectDropDown from '../../../layout/DropDown/SelectDropDown';
import classes from './Reporting.module.css';
// import common from '../../../commonStyles/common.module.css'
// import Loader from '../../layout/Loader/Loader';
// import DataStatusIndicator from '../../layout/AdminDataStatusNotes/DataStatusIndicator'
// import MuiPagination from '../../layout/TablePagination/MuiPagination'
// import { currentDateTime } from '../../../helpers/getCurrentTime';
import { IconButton } from '@mui/material';
// import RenderDownloadXLSXButton from '../../../helpers/generateExcelFile'
// import StackedColumns from '../../layout/Charts/StackedColumns';
// import PieChart from '../../layout/Charts/PieChart';
import ScrollableTabsButtonAuto from '../../../layout/ScrollableTabs/ScrollableTabs';
import CourseUsersTable from './CourseUsersTable';
import CourseModuleUsersTable from './CourseModuleUsersTable';

const SingleCourseReport = () => {
	const [courseNames, setCourseNames] = useState([]);
	const [courseLabel, setCourseLabel] = useState('');
	const [groupLabel, setGroupLabel] = useState('');
	const [roleLabel, setRoleLabel] = useState('');
	const [gradeLabel, setGradeLabel] = useState('');
	const [locationLabel, setLocationLabel] = useState('');
	const [genderLabel, setGenderLabel] = useState('');
	const [assignableCourses, setAssignableCourses] = useState([]);
	const [courseModuleEngagementLabels, setCourseModuleEngagementLabels] = useState([]);
	const [selectedCourseID, setSelectedCourseID] = useState(null);
	const [page, setPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(100);
	const [showTableKey, setShowTableKey] = useState(0);

	// const { status: assignmentCoursesStatus, data: assignmentCourses } = useFetchAssignmentCourses();
	// const { status: companyFiltersStatus, data: companyFilters } = useFecthCompanyFilters();
	// const {
	// 	isFetching,
	// 	status: singleCourseReportStatus,
	// 	data: singleCourseReport,
	// } = useFetchSingleCourseReport(
	// 	selectedCourseID,
	// 	groupLabel,
	// 	genderLabel,
	// 	locationLabel,
	// 	roleLabel,
	// 	gradeLabel,
	// 	page
	// );

	// let courseReportDetails = singleCourseReport?.courseDetails;

	//extract company course names for rendering on filter dropdown
	//set assignable courses for use when finding course ID from filter selection
	// useEffect(() => {
	// 	setCourseNames(
	// 		assignmentCoursesStatus === 'success' &&
	// 			Array.isArray(assignmentCourses) &&
	// 			assignmentCourses
	// 				?.filter((course) => course.enrolled === true)
	// 				?.map((course) => course.courseName)
	// 	);
	// 	setAssignableCourses(
	// 		assignmentCoursesStatus === 'success' &&
	// 			Array.isArray(assignmentCourses) &&
	// 			assignmentCourses?.filter((course) => course.enrolled === true)
	// 	);
	// }, [assignmentCoursesStatus, assignmentCourses]);

	//set default course name and course ID
	// useEffect(() => {
	// 	// const randomCompanyCourse = courseNames && courseNames[0]
	// 	const randomCompanyCourse =
	// 		courseNames && courseNames[Math.floor(Math.random() * courseNames.length)];
	// 	const randomCompanyCourseIDAsDefault =
	// 		assignableCourses &&
	// 		assignableCourses?.find((course) => course.courseName === randomCompanyCourse)?.courseID;
	// 	setSelectedCourseID(randomCompanyCourseIDAsDefault);
	// 	setCourseLabel(randomCompanyCourse);
	// }, [courseNames, assignableCourses]);

	// //create module number labels based on report array length
	// useEffect(() => {
	// 	const moduleLabels = [];
	// 	for (let i = 1; i <= courseReportDetails?.noOfModules; i++) {
	// 		moduleLabels.push('M-' + i);
	// 		setCourseModuleEngagementLabels(moduleLabels);
	// 	}
	// }, [courseReportDetails?.noOfModules]);

	//remove all filters or filter labels at once
	const removeAllFilters = () => {
		setGroupLabel('');
		setRoleLabel('');
		setGradeLabel('');
		setLocationLabel('');
		setGenderLabel('');
	};

	//remove filters on at a time based on type
	const removeSpecificFilters = (filterType) => {
		if (filterType === groupLabel) setGroupLabel('');
		if (filterType === roleLabel) setRoleLabel('');
		if (filterType === gradeLabel) setGradeLabel('');
		if (filterType === locationLabel) setLocationLabel('');
		if (filterType === genderLabel) setGenderLabel('');
	};

	//show 'Filterng By' text only when there is atleast on filters/filter labels applied
	const renderFilteringByTag = () => {
		if (!groupLabel && !roleLabel && !gradeLabel && !locationLabel && !genderLabel) {
			return ' ';
		} else {
			return (
				<span style={{ fontSize: '13px', fontWeight: '600', marginRight: '10px' }}>
					Filtering By:{' '}
				</span>
			);
		}
	};

	//set filter types/labels into array for rendering as buttons
	const selectedfilters = [groupLabel, roleLabel, gradeLabel, locationLabel, genderLabel];

	//set selected course ID from name find comparison on assignable courses
	const getID = (courseName) => {
		setSelectedCourseID(
			assignableCourses?.find((course) => course.courseName === courseName)?.courseID
		);
	};

	return (
		<div className={classes.SubContainer}>
			<div className={classes.InnerContainer}>
				<div className={classes.SearchSelection}>
					<SelectDropDown
						legend="select a course"
						label={courseLabel}
						// status={assignmentCourses?.errorRes}
						// options={assignmentCoursesStatus === 'success' && courseNames}
						setFilterBy={setCourseLabel}
						getID={getID}
					/>
				</div>
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
							(filter, index) =>
								filter && (
									<span className={classes.FilterButton} key={index}>
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
					<div className={classes.CourseDetails}>
						<div className={classes.CourseValues}>
							<p>Course Engagement</p>
							<div className={classes.CourseValuesValues}>
								<p>
									Course Name:
									<span>{courseLabel}</span>
								</p>
								<p>
									Modules:
									{/* <span>{courseReportDetails?.noOfModules} </span> */}
								</p>
								<p>
									Enrolled:
									{/* <span> {courseReportDetails?.enrolled} </span> */}
								</p>
								<p>
									Completed:
									{/* <span> {singleCourseReport?.courseDetails?.completed} </span> */}
								</p>
								<p>
									Not Completed:
									{/* <span>{singleCourseReport?.courseDetails?.notCompleted}</span> */}
								</p>
								<p>
									Passed:
									{/* <span> {courseReportDetails?.passed} </span> */}
								</p>
								<p>
									Failed:
									{/* <span> {singleCourseReport?.courseDetails?.failed} </span> */}
								</p>
								<p>
									National Avg. (%):
									{/* <span>{courseReportDetails?.nationalAverage}</span> */}
								</p>
								{/* 
								<p>
									Avg. Filters (%) - (course/group/role/grade):
									<span> 66 </span>
								</p> */}
							</div>
							{/* {isFetching && (
								<div className={classes.LoadingScreen}>
									<Loader />
								</div>
							)} */}
						</div>

						<div className={classes.CourseValuesChart}>
							<p>Course Engagement Chart</p>
							<div className={classes.CourseChart}>
								{/* {courseReportDetails &&
									singleCourseReport?.courseEngagementChart &&
									singleCourseReport?.courseAssessment && (
										<>
											<StackedColumns
												title="Module Completion"
												colors={['#f17e3b', '#f5b579CC']}
												courseModuleEngagementLabels={courseModuleEngagementLabels}
												first_attempt={singleCourseReport?.courseEngagementChart?.first_attempt}
												multiple_attempt={
													singleCourseReport?.courseEngagementChart?.multiple_attempt
												}
											/>

											<PieChart
												title="Course Completion"
												series={[courseReportDetails?.completed, courseReportDetails?.notCompleted]}
												labels={['Completed', 'Not Completed']}
												colors={['#f17e3b', '#f5b579CC']}
												fileDownloadName={`${courseLabel} Completion Status ${currentDateTime()}`}
											/>
											<DonutChart
												title="Course Assessment (score range)"
												series={singleCourseReport?.courseAssessment?.courseAssessmentValues}
												labels={singleCourseReport?.courseAssessment?.courseAssessmentRange}
												colors={['#df6e61c7', '#f5b579CC', '#f17e3b', '#278966c7']}
												fileDownloadName={`${courseLabel} Assessment Status ${currentDateTime()}`}
											/>
										</>
									)} */}
							</div>
						</div>
					</div>

					<div className={classes.UserTables}>
						<ScrollableTabsButtonAuto
							value={showTableKey}
							setValue={setShowTableKey}
							tabLabels={['Course Users', 'Course Module Users']}
							center={false}
						/>
						{showTableKey === 0 && (
							<CourseUsersTable
								// singleCourseReportStatus={singleCourseReportStatus}
								// singleCourseReport={singleCourseReport}
								// header={header}
								courseLabel={courseLabel}
								setPage={setPage}
								page={page}
								rowsPerPage={rowsPerPage}
								setRowsPerPage={setRowsPerPage}
								groupLabel={groupLabel}
								roleLabel={roleLabel}
								gradeLabel={gradeLabel}
								locationLabel={locationLabel}
								genderLabel={genderLabel}
							/>
						)}

						{showTableKey === 1 && (
							<CourseModuleUsersTable
								// singleCourseReportStatus={singleCourseReportStatus}
								// singleCourseReport={singleCourseReport}
								// header={header}
								courseLabel={courseLabel}
								setPage={setPage}
								page={page}
								rowsPerPage={rowsPerPage}
								setRowsPerPage={setRowsPerPage}
								groupLabel={groupLabel}
								roleLabel={roleLabel}
								gradeLabel={gradeLabel}
								locationLabel={locationLabel}
								genderLabel={genderLabel}
								courseID={selectedCourseID}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCourseReport;
