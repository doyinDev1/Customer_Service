import ProgressBar from 'react-bootstrap/ProgressBar';
import UserHeader from '../../layout/UserHeader/UserHeader';
import classes from './Learn.module.css';
import { Link } from 'react-router-dom';
// import { CloseOutlined } from '@material-ui/icons';
import { Button, Accordion } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import CourseCard from '../../layout/CourseCard/CourseCard';

const Learn = () => {
	return (
		<>
			<UserHeader />

			<section className={classes.MainSection}>
				<h2 className={classes.PageHeader}>All Courses </h2>
				{/* <div className={classes.CourseInfo}>
					<h3>Course 1</h3>
					<p>
						The Art of Coaching course will equip you with tools to develop your coaching skills and
						work towards becoming the sort of leader that people would choose to be led by.{' '}
					</p>
					<Accordion flush className={classes.Accordion}>
						<Accordion.Item eventKey="0">
							<Accordion.Header className={classes.AccordionHeader}>
								Learning Objectives
							</Accordion.Header>
							<Accordion.Body className={classes.AccordionBody}>
								<ul></ul>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
					<ProgressBar now={50} label={`Progress: ${0} of 7 - ${0}%`} />
					<div className={classes.ButtonContainer}>
						<Link to="/">View Course</Link>
						<Button>Download Certificate</Button>
					</div>
				</div> */}
				<div className={classes.CourseContainer}>
					<CourseCard
						courseTitle="Course One"
						courseDescription="The Art of Coaching course will equip you with tools to develop your coaching skills and
						work towards becoming the sort of leader that people would choose to be led by."
						courseID="3"
					/>
					<CourseCard
						courseTitle="Course One"
						courseDescription="The Art of Coaching course will equip you with tools to develop your coaching skills and
						work towards becoming the sort of leader that people would choose to be led by."
						courseID="3"
					/>
				</div>

				{/* {loading && <Loader />}
				{error && <h6>{error}</h6>} */}
			</section>

			<Toaster />
		</>
	);
};

export default Learn;
