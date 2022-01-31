import { Person, LockOpen, ViewModule, CardMembership } from '@material-ui/icons';
import classes from './Dashboard.module.css';
import { useState } from 'react';
import CourseSummary from '../../layout/Admin/CourseSummaryCards/CourseSummary';
import DataTable from '../../layout/Admin/DataTable/DataTable';

const Reports = () => {
	const [view, setView] = useState('allCandidates');

	return (
		<section className={classes.Reports}>
			<h1>Reports</h1>
			<div className={classes.TopSection}>
				<CourseSummary courseName="The Art of Coaching" inProgress={35} enrolled={100} />
				<CourseSummary courseName="Social Media Mangement" inProgress={18} enrolled={80} />
			</div>
			<DataTable />
		</section>
	);
};

export default Reports;

// export const TableView = styled.div``
