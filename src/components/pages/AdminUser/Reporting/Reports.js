import { Person, LockOpen, ViewModule, CardMembership } from '@material-ui/icons';
// import classes from './Dashboard.module.css';
import { useState } from 'react';
// import CourseSummary from '../../../../layout/Admin/CourseSummaryCards/CourseSummary';
// import DataTable from '../../../../layout/Admin/DataTable/DataTable';

// import UserHeader from '../../layout/UserHeader/UserHeader'
import common from '../../../../commonStyles/common.module.css';
// import classes from './Reporting.module.css'
import ScrollableTabsButtonAuto from '../../../layout/ScrollableTabs/ScrollableTabs';
import AllCoursesReport from './AllCoursesReport';
import SingleCourseReport from './SingleCourseReport';
import SingleCandidateReport from './SingleCandidateReport';

const Reports = () => {
	// const [view, setView] = useState('allCandidates');

	// return (
	// 	<section className={classes.Reports}>
	// 		<h1>Reports</h1>
	// 		<div className={classes.TopSection}>
	// 			<CourseSummary courseName="The Art of Coaching" inProgress={35} enrolled={100} />
	// 			<CourseSummary courseName="Social Media Mangement" inProgress={18} enrolled={80} />
	// 		</div>
	// 		<DataTable />
	// 	</section>
	// );

	const userInfo = JSON.parse(localStorage.getItem('ccAuth'));
	const [pageKey, setPageKey] = useState(
		JSON.parse(localStorage.getItem('reportView'))
			? JSON.parse(localStorage.getItem('reportView'))
			: 0
	);

	return (
		<>
			{/* <UserHeader /> */}
			<h3 className={common.SectionTitle}>{userInfo.companyName} | Reporting</h3>
			<section className={common.SectionContainer}>
				<ScrollableTabsButtonAuto
					value={pageKey}
					setValue={setPageKey}
					tabLabels={['All Courses', 'Course view', 'Candidate view']}
					center
				/>

				{pageKey === 0 && <AllCoursesReport />}

				{pageKey === 1 && <SingleCourseReport />}

				{pageKey === 2 && <SingleCandidateReport />}
			</section>
		</>
	);
};

export default Reports;

// export const TableView = styled.div``
