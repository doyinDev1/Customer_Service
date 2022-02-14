// import CustomPieChart from '../../CustomPieChart/CustomPieChart';
import classes from './CourseSummary.module.css';
import { LibraryBooksRounded } from '@material-ui/icons';
import ProgressBar from 'react-bootstrap/ProgressBar';

const CourseSummary = (props) => {
	const now = Math.floor((props.inProgress / props.enrolled) * 100);
	return (
		<button className={classes.SummaryCard}>
			<div className={classes.TextHeader}>
				<LibraryBooksRounded />
				<div>
					<h5>{props.courseName}</h5>
					<p>Total Enrolled: {props.enrolled}</p>
				</div>
			</div>
			<ProgressBar now={now} variant="success" className={classes.Progress} />
			<p className={classes.InProgressText}>
				In Progress: {props.inProgress} ({now}%){' '}
			</p>
			{/* <div className={classes.Progress}></div> */}
			{/* <div>
				<CustomPieChart series={[20, 50]} />
			</div> */}
		</button>
	);
};

export default CourseSummary;
