import { Link } from 'react-router-dom';
import classes from './CourseCard.module.css';

const images = {
	courseOne: 'https://res.cloudinary.com/abisola/image/upload/v1642544624/2473945-min_o0v94k.png',
	courseTwo: 'https://res.cloudinary.com/abisola/image/upload/v1642544624/5124556-min_cjo8d9.png',
};

const data = [];

const CourseCard = (props) => {
	// const idStr = '9';
	// const code = idStr.charCodeAt(0);
	// console.log(code);
	// const reversed = String.fromCharCode(code);
	// console.log(reversed);
	return (
		<div className={classes.CourseCard}>
			<img src={images[props.image]} alt={props.courseTitle} className={classes.CourseCardImage} />
			<div>
				<h3 className={classes.CourseTitle}>{props.courseTitle}</h3>
				<p className={classes.CourseDescription}>{props.courseDescription}</p>
				<div className={classes.LinkContainer}>
					<p className={classes.CourseStatus}>
						Completed: 1 <span>of</span> 1
					</p>
					<Link to={`/learn/${props.courseID}`}
						state={{ from: data, props }}
					>View Course</Link>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
