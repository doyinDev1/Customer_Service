import CustomPieChart from '../../CustomPieChart/CustomPieChart';
import classes from './CourseSummary.module.css';
import { LibraryBooksRounded } from '@material-ui/icons';
import ProgressBar from 'react-bootstrap/ProgressBar';

const CourseSummary = () => {
	const now = (20 / 70) * 100;
	return (
		<button className={classes.SummaryCard}>
			<div className={classes.TextHeader}>
				<LibraryBooksRounded />
				<div>
					<h5>The Art of Coaching</h5>
					<p>Total Enrolled: 70</p>
				</div>
			</div>
			<ProgressBar now={now} variant="success" className={classes.Progress} />
			<p className={classes.InProgressText}>In Progress: 20 ({Math.floor((20 / 70) * 100)}%) </p>
			{/* <div className={classes.Progress}></div> */}
			{/* <div>
				<CustomPieChart series={[20, 50]} />
			</div> */}
		</button>
	);
};

export default CourseSummary;
