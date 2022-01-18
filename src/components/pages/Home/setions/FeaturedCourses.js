import { Container } from 'react-bootstrap';
import classes from '../Home.module.css';
import CourseCard from '../../../layout/CourseCard/CourseCard';

const FeaturedCourses = () => {
	return (
		<section className={classes.FeaturedCourses}>
			<Container>
				<h3 className={classes.SectionHeading}>Featured Courses</h3>
				{/* <div>
					<CourseCard />
				</div> */}
			</Container>
		</section>
	);
};

export default FeaturedCourses;
