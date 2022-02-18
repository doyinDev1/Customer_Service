import CustomNavbar from '../../layout/Navbar/Navbar';
import classes from './Login.module.css';
import UserForm from './UserForm';

const Login = () => {
	return (
		<>
			<CustomNavbar />
			<section className={classes.LoginContainer}>
				<div className={classes.LoginTypes}>
					<h1> WELCOME </h1>
					<h3>TO ROLEPLAY</h3>
					<p> It’s time to unlock your potential and become great at providing world class customer service to clients.
						Learn about the strategies, tactics, and mindset needed to unlock your potential and give yourself the edge you need. </p>
					<div className={classes.UserButtonsDiv}></div>
				</div>
				<div className={classes.LoginTypes}>{<UserForm />}</div>
			</section>
		</>
	);
};

export default Login;
