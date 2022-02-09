// import ProgressBar from 'react-bootstrap/ProgressBar';
import UserHeader from '../../layout/UserHeader/UserHeader';
import classes from './Learn.module.css';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { CloseOutlined } from '@material-ui/icons';
import { Button } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import CourseCard from '../../layout/CourseCard/CourseCard';
import toast from 'react-hot-toast';
import { useFecthEnrolledCourses } from '../../../DataQueries/userHooks/fetch';
import CustomSpinner from '../../layout/CustomSpinner/CustomSpinner';

const Learn = () => {
	// const [loading, setLoading] = useState(false);
	// const [error, setError] = useState('');
	// const userInfo = JSON.parse(sessionStorage.getItem('rpUser'));

	const { status, data } = useFecthEnrolledCourses();

	// useEffect(() => {
	// 	axios
	// 		.post(`${Config.url.API_URL}/enrolled-courses`, { userID: 2 })
	// 		.then((res) => {
	// 			// console.log(res);
	// 			setEnrolledCourseOne(res.data?.enrolledCourses[0]);
	// 			setEnrolledCourseTwo(res.data?.enrolledCourses[1]);
	// 		})
	// 		.catch((err) => {
	// 			const errMsg = err?.response?.data?.message;
	// 			toast.error(errMsg);
	// 		});
	// }, []);

	return (
		<>
			<UserHeader />

			<section className={classes.MainSection}>
				<h2 className={classes.PageHeader}>All Courses </h2>

				{status === 'loading' && <CustomSpinner />}

				<div className={classes.CourseContainer}>
					{status === 'success' &&
						data?.enrolledCourses &&
						data.enrolledCourses.map((course) => (
							<CourseCard
								key={course.courseTitle}
								courseTitle={course.course_name}
								courseDescription={course.course_description}
								completedModule={course.modules_completed}
								numberOfModules={course.no_of_modules}
								courseID={course.course_id}
								courseFor={course.courseFor}
								list={course.list}
								courseImage={course.courseImage}
							/>
						))}
				</div>

				{status === 'success' && (
					<div className={classes.Assessment}>
						<h2 className={classes.Heading}>Assessment</h2>
						<div className={classes.AssessmentInfo}>
							{/* <h3>Course Assessment</h3> */}
							<p>
								Take the course assessment and get access to your certificate when you pass the
								assessment
							</p>
							<div className={classes.ButtonContainer}>
								<Link to="/">Take Assessment</Link>
								<Button>Download Certificate</Button>
							</div>
						</div>
					</div>
				)}

				{/* {loading && <Loader />}
				{error && <h6>{error}</h6>} */}
			</section>
			<Toaster />
		</>
	);
};

export default Learn;
