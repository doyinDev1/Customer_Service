// import ProgressBar from 'react-bootstrap/ProgressBar';
import UserHeader from '../../layout/UserHeader/UserHeader';
import classes from './Learn.module.css';
import { Link } from 'react-router-dom';
// import { CloseOutlined } from '@material-ui/icons';
import { Button } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import CourseCard from '../../layout/CourseCard/CourseCard';

const Learn = () => {
	return (
		<>
			<UserHeader />

			<section className={classes.MainSection}>
				<h2 className={classes.PageHeader}>All Courses </h2>

				<div className={classes.CourseContainer}>
					<CourseCard
						image="courseOne"
						courseTitle="Course One"
						courseDescription="The Art of Coaching course will equip you with tools to develop your coaching skills and
						work towards becoming the sort of leader that people would choose to be led by."
						courseID="3"
					/>
					<CourseCard
						image="courseTwo"
						courseTitle="Course One"
						courseDescription="The Art of Coaching course will equip you with tools to develop your coaching skills and
						work towards becoming the sort of leader that people would choose to be led by."
						courseID="3"
					/>
				</div>

				<div className={classes.Assessment}>
					<h2 className={classes.Heading}>Assessment</h2>
					<div className={classes.CourseInfo}>
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

				{/* {loading && <Loader />}
				{error && <h6>{error}</h6>} */}
			</section>

			<Toaster />
		</>
	);
};

export default Learn;
