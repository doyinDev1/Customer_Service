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
						courseFor = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed libero non augue maximus laoreet. Mauris maximus elit eu lacus cursus facilisis. Pellentesque eu elit odio. Integer ac egestas erat. Mauris fringilla ullamcorper tincidunt. Phasellus id libero volutpat, faucibus justo non, finibus metus. Phasellus suscipit leo vel odio tempus rhoncus. Nam semper lacus vel lacus interdum venenatis. Nunc facilisis dolor quis lectus pharetra condimentum. Nulla facilisi. Duis rutrum commodo est eget tristique. Sed sollicitudin quam diam, luctus aliquet metus suscipit sed. Maecenas ornare dapibus lectus, id cursus arcu tempus id. Etiam diam elit, vulputate eget sollicitudin a, maximus id erat. Phasellus volutpat malesuada metus ac semper. Nam luctus, quam rhoncus eleifend pulvinar, odio turpis varius nisl, sed molestie tortor mauris quis felis. Aliquam id nulla sit amet risus malesuada commodo at vel metus. Etiam sed malesuada magna. Donec eget malesuada augue. Proin sit amet consequat tellus. Donec vel interdum velit. Integer tempor lacus vel eros lobortis, ut porttitor orci aliquet. Nunc porta fermentum sapien, eget venenatis orci sodales quis. Ut ullamcorper augue nunc, in suscipit nulla finibus et. Mauris efficitur orci vel efficitur elementum"
						list={ ["React Hooks! (My favorite part of react!)", "Master React Router", "React State Management Patterns", "Work with tons of libraries and tools", "React Design Patterns and Strategies", "Drag & Drop With React", "The basics of React", "Common React Router Patterns", "Learn the ins and outs of JSX", "Optimize React components"]}
						courseImage= 'https://res.cloudinary.com/abisola/image/upload/v1642544624/2473945-min_o0v94k.png'

					/>
					<CourseCard
						image="courseTwo"
						courseTitle="Course Two"
						courseDescription="The Art of Coaching course will equip you with tools to develop your coaching skills and
						work towards becoming the sort of leader that people would choose to be led by."
						courseID="4"
						courseFor= "This course will improve your ability to influence people in situations where you cannot use formal authority. You will learn about effective ways to build, develop, and sustain a power base in your organization. You will also learn influence tactics that enable you to be more persuasive and influential in working with your superiors, peers, and even subordinates. In addition, you will learn how to build and maintain high-quality relationships to further maximize your informal power and ability to influence others. Importantly, you will distinguish between influence and manipulation and learn how to protect yourself from the unwanted influence of others. The influence strategies you learn in this course will make you a more confident and influential leader, presenter, and decision-maker. You will more effective in pitching business ideas to your superiors, influencing customers, and building coalitions across stakeholders. This course will not only give you strategic guidance on how to develop and maintain your network for influence and power, but we will also equip you with specific tactics and strategies that are proven to work for gaining power and influencing people."
						list= {["This course will improve your ability to influence people ", "You will learn about effective ways to build", "You will also learn influence tactics that enable you to be more persuasive", "you will learn how to build and maintain high-quality relationships","you will distinguish between influence and manipulation", "learn how to protect yourself from the unwanted influence", "This course will make you a more confident and influential leader", "You will more effective in pitching business ideas", "How to develop and maintain your network for influence and power", "equip you with specific tactics and strategies that are proven to work"]}
						courseImage= 'https://res.cloudinary.com/abisola/image/upload/v1642544624/5124556-min_cjo8d9.png'


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
