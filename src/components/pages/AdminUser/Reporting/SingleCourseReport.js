import { Cancel, Clear } from '@material-ui/icons';
import { useState, useEffect } from 'react';
// import { Spinner, Table } from 'react-bootstrap'
import DonutChart from '../../../layout/Charts/DonutChart';
// import Bar from '../../layout/Charts/BarChart'
import {
	useFecthFilters,
	useFetchSingleCourseReport,
} from '../../../../DataQueries/adminHooks/fetch';
import { useFecthEnrolledCourses } from '../../../../DataQueries/userHooks/fetch';
import SelectDropDown from '../../../layout/DropDown/SelectDropDown';
import classes from './Reporting.module.css';
import Loader from '../../../layout/CustomSpinner/CustomSpinner';
// import DataStatusIndicator from '../../layout/AdminDataStatusNotes/DataStatusIndicator'
// import MuiPagination from '../../layout/TablePagination/MuiPagination'
import { currentDateTime } from '../../../helpers/getCurrentTime';
import { IconButton } from '@mui/material';
// import RenderDownloadXLSXButton from '../../../helpers/generateExcelFile'
import StackedColumns from '../../../layout/Charts/StackedColumns';
import PieChart from '../../../layout/Charts/PieChart';
// import ScrollableTabsButtonAuto from '../../../layout/ScrollableTabs/ScrollableTabs';
import CourseUsersTable from './CourseUsersTable';
// import CourseModuleUsersTable from './CourseModuleUsersTable';

const SingleCourseReport = () => {
	const [courseData, setCourseData] = useState([]);
	const [courseLabel, setCourseLabel] = useState('');
	const [gradeLabel, setGradeLabel] = useState('');
	const [locationLabel, setLocationLabel] = useState('');
	const [genderLabel, setGenderLabel] = useState('');

	const [courseModuleEngagementLabels, setCourseModuleEngagementLabels] = useState([]);

	const [selectedCourse, setSelectedCourse] = useState({
		courseLabel: '',
		courseID: '',
	});
	const [page, setPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(100);
	const [showTableKey, setShowTableKey] = useState(0);
	const { status: filtersStatus, data: filters } = useFecthFilters();

	const { status: coursesStatus, data: allCoursesData } = useFecthEnrolledCourses();

	const {
		isFetching,
		status: singleCourseReportStatus,
		data: singleCourseReport,
	} = useFetchSingleCourseReport(
		selectedCourse.courseID,
		genderLabel,
		locationLabel,
		gradeLabel,
		page
	);

	let courseReportDetails = singleCourseReport?.courseDetails;
	console.log(singleCourseReport);

	// extract company course names for rendering on filter dropdown
	// set assignable courses for use when finding course ID from filter selection
	useEffect(() => {
		if (coursesStatus === 'success' && Array.isArray(allCoursesData.enrolledCourses))
			setCourseData(allCoursesData.enrolledCourses);
	}, [coursesStatus, allCoursesData]);

	// set default course name and course ID
	useEffect(() => {
		// const randomCompanyCourse = courseNames && courseNames[0]]
		if (courseData.length > 0) {
			const defaultCourse = courseData && courseData[0];

			setSelectedCourse({
				courseID: defaultCourse.course_id,
				courseLabel: defaultCourse.course_name,
			});
		}
	}, [courseData]);

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
		setGradeLabel('');
		setLocationLabel('');
		setGenderLabel('');
	};

	//remove filters on at a time based on type
	const removeSpecificFilters = (filterType) => {
		if (filterType === gradeLabel) setGradeLabel('');
		if (filterType === locationLabel) setLocationLabel('');
		if (filterType === genderLabel) setGenderLabel('');
	};

	//show 'Filterng By' text only when there is atleast on filters/filter labels applied
	const renderFilteringByTag = () => {
		if (!gradeLabel && !locationLabel && !genderLabel) {
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
	const selectedfilters = [gradeLabel, locationLabel, genderLabel];

	//set selected course ID from name find comparison on assignable courses
	const getID = (courseName) => {
		setSelectedCourse({
			courseLabel: courseData?.find((course) => course.course_name === courseName)?.course_name,
			courseID: courseData?.find((course) => course.course_name === courseName)?.course_id,
		});

		return courseData?.find((course) => course.course_name === courseName)?.course_id;
	};

	// extract courseName from courses array
	const extractCourseName = () =>
		coursesStatus === 'success' &&
		allCoursesData.enrolledCourses.map((course) => course.course_name);

	return (
		<div className={classes.SubContainer}>
			<div className={classes.InnerContainer}>
				<div className={classes.SearchSelection}>
					<SelectDropDown
						legend="select a course"
						label={selectedCourse.courseLabel}
						status={allCoursesData?.errorRes}
						options={extractCourseName()}
						setFilterBy={setCourseLabel}
						getID={getID}
					/>
				</div>
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
						{(gradeLabel || locationLabel || genderLabel) && (
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
									<span>{selectedCourse.courseLabel}</span>
								</p>
								<p>
									Modules:
									<span>{courseReportDetails?.noOfModules} </span>
								</p>
								<p>
									Enrolled:
									<span> {courseReportDetails?.enrolled} </span>
								</p>
								<p>
									Completed:
									<span> {singleCourseReport?.courseDetails?.completed} </span>
								</p>
								<p>
									Not Completed:
									<span>{singleCourseReport?.courseDetails?.notCompleted}</span>
								</p>
								<p>
									Passed:
									<span> {courseReportDetails?.passed} </span>
								</p>
								<p>
									Failed:
									<span> {singleCourseReport?.courseDetails?.failed} </span>
								</p>
								{/* <p>
									National Avg. (%):
									<span>{courseReportDetails?.nationalAverage}</span>
								</p> */}
								{/* 
								<p>
									Avg. Filters (%) - (course/group/role/grade):
									<span> 66 </span>
								</p> */}
							</div>
							{isFetching && (
								<div className={classes.LoadingScreen}>
									<Loader />
								</div>
							)}
						</div>

						<div className={classes.CourseValuesChart}>
							<p>Course Engagement Chart</p>
							<div className={classes.CourseChart}>
								{courseReportDetails &&
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
												colors={['#12435d', '#1fa3af']}
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
									)}
							</div>
						</div>
					</div>

					<div className={classes.UserTables}>
						{/* <ScrollableTabsButtonAuto
							value={showTableKey}
							setValue={setShowTableKey}
							tabLabels={['Course Users', 'Course Module Users']}
							center={false}
						/> */}
						{/* {showTableKey === 0 && ( */}
						<CourseUsersTable
							singleCourseReportStatus={singleCourseReportStatus}
							singleCourseReport={singleCourseReport}
							// header={header}
							courseLabel={courseLabel}
							setPage={setPage}
							page={page}
							rowsPerPage={rowsPerPage}
							setRowsPerPage={setRowsPerPage}
							gradeLabel={gradeLabel}
							locationLabel={locationLabel}
							genderLabel={genderLabel}
						/>
						{/* )} */}

						{/* {showTableKey === 1 && (
							<CourseModuleUsersTable
								singleCourseReportStatus={singleCourseReportStatus}
								singleCourseReport={singleCourseReport}
								// header={header}
								courseLabel={courseLabel}
								setPage={setPage}
								page={page}
								rowsPerPage={rowsPerPage}
								setRowsPerPage={setRowsPerPage}
								gradeLabel={gradeLabel}
								locationLabel={locationLabel}
								genderLabel={genderLabel}
								courseID={selectedCourse.courseID}
							/>
						)} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCourseReport;
