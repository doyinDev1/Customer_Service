import { Link } from 'react-router-dom';
import classes from './HomeCourseCard.module.css';

// const images = {
// 	courseOne: 'https://res.cloudinary.com/abisola/image/upload/v1642544624/2473945-min_o0v94k.png',
// 	courseTwo: 'https://res.cloudinary.com/abisola/image/upload/v1642544624/5124556-min_cjo8d9.png',
// };
const data = [];

const HomeCourseCard = (props) => {
	return (
		<div className={classes.Card}>
			<img src={props.courseImage} alt={props.courseTitle} className={classes.CourseImage} />
			<div className={classes.CourseTextContainer}>
				<h5>{props.courseTitle}</h5>
				<p>{props.courseDescription.substring(0, 100)}...</p>
				<Link to={`/learn/${props.courseID}`} state={{ from: data, props }}>
					View Course &#8250;
				</Link>
			</div>
		</div>
	);
};

export default HomeCourseCard;
