import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './CourseCard.module.css';

const CourseCard = (props) => {
	// const idStr = '9';
	// const code = idStr.charCodeAt(0);
	// console.log(code);
	// const reversed = String.fromCharCode(code);
	// console.log(reversed);
	return (
		<div className={classes.CourseCard}>
			<h3 className={classes.CourseTitle}>{props.courseTitle}</h3>
			<p className={classes.CourseDescription}>{props.courseDescription}</p>
			<div className={classes.LinkContainer}>
				<Link to={`/learn/${props.courseID}`}>View Course</Link>
				<p className={classes.CourseStatus}>
					Completed: 1 <span>of</span> 1
				</p>
			</div>
		</div>
	);
};

export default CourseCard;
