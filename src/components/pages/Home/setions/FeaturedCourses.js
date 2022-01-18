import { Container } from 'react-bootstrap';
import classes from '../Home.module.css';
import HomeCourseCard from '../../../layout/HomeCourseCard/HomeCourseCard';

const FeaturedCourses = () => {
	return (
		<section className={classes.FeaturedCourses}>
			<Container>
				<h3 className={classes.SectionHeading}>Featured Courses</h3>
				<div className={classes.CourseCardContainer}>
					<HomeCourseCard
						image="courseOne"
						title="Art of Coaching"
						description="Boost agent motivation by conveying the importance of their role in building lasting customer relationships."
					/>
					<HomeCourseCard
						image="courseTwo"
						title="Social Media Mangement"
						description="Excel your customer interactions on social media! This course teaches how to handle customers on various social channels."
					/>
				</div>
			</Container>
		</section>
	);
};

export default FeaturedCourses;
