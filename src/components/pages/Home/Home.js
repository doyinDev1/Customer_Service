import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar/Navbar';
import classes from './Home.module.css';
import FeaturedCourses from './setions/FeaturedCourses';

const Home = () => {
	return (
		<>
			<Navbar />
			<header className={classes.Header}>
				<Container>
					<h1 className={classes.PageHeader}>We’re here to help you.</h1>
					<p className={classes.Paragraph}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore modi suscipit dolore
						cum rem mollitia blanditiis magnam minima.
					</p>
					<Link to="/login" className={classes.LoginLink}>
						Login Here
					</Link>
				</Container>
			</header>
			<main>
				<FeaturedCourses />
			</main>
		</>
	);
};

export default Home;
