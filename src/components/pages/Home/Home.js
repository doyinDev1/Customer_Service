import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar/Navbar';
import classes from './Home.module.css';
import FeaturedCourses from './setions/FeaturedCourses';
import { motion } from 'framer-motion';

const Home = () => {
	const variants = {
		initial: { y: '100%', skewY: '7' },
		animate: { y: 0, skewY: 0 },
	};
	return (
		<>
			<Navbar />
			<header className={classes.Header}>
				<Container>
					<h1 className={classes.PageHeader}>
						<div className={classes.HeadingTextDiv}>
							<motion.span
								variants={variants}
								initial="initial"
								animate="animate"
								transition={{ duration: 0.7, ease: 'easeOut' }}
							>
								We’re here to{' '}
							</motion.span>
						</div>
						<div className={classes.HeadingTextDiv}>
							<motion.span
								variants={variants}
								initial="initial"
								animate="animate"
								transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
							>
								help you.
							</motion.span>
						</div>
					</h1>
					<motion.div
						className={classes.HeaderParagraph}
						animate={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
					>
						<p className={classes.Paragraph}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore modi suscipit
							dolore cum rem mollitia blanditiis magnam minima.
						</p>
						<Link to="/login" className={classes.LoginLink}>
							Login
						</Link>
					</motion.div>
				</Container>
			</header>
			<main>
				<FeaturedCourses />
			</main>
		</>
	);
};

export default Home;
