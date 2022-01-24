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
				<CourseSummary />
				<CourseSummary />
			</div>
			<DataTable />
		</section>
	);
};

export default Reports;

// export const TableView = styled.div``
