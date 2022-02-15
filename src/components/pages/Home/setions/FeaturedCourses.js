import { Container } from 'react-bootstrap';
import classes from '../Home.module.css';
import HomeCourseCard from '../../../layout/HomeCourseCard/HomeCourseCard';
import { useFecthEnrolledCourses } from '../../../../DataQueries/userHooks/fetch';

const FeaturedCourses = () => {
	const { status, data } = useFecthEnrolledCourses();

	return (
		<section className={classes.FeaturedCourses}>
			<Container>
				<h3 className={classes.SectionHeading}>Featured Courses</h3>
				<div className={classes.CourseCardContainer}>
					{status === 'success' &&
						data?.enrolledCourses?.map((course) => (
							<HomeCourseCard
								key={course.courseTitle}
								courseTitle={course.course_name}
								courseDescription={course.course_description}
								completedModule={course.modules_completed}
								numberOfModules={course.modules_count}
								courseID={course.course_id}
								courseFor={course.courseFor}
								list={course.list}
								courseImage={course.courseImage}
							/>
						))}
					{/* <HomeCourseCard
						image="courseOne"
						title="Art of Coaching"
						courseID="3"
						description="Boost agent motivation by conveying the importance of their role in building lasting customer relationships."
					/>
					<HomeCourseCard
						image="courseTwo"
						courseID="4"
						title="Social Media Mangement"
						description="Excel your customer interactions on social media! This course teaches how to handle customers on various social channels."
					/> */}
				</div>
			</Container>
		</section>
	);
};

export default FeaturedCourses;
