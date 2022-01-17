import classes from './Login.module.css';
import UserForm from './UserForm';

const Login = () => {


	return (
		<section className={classes.LoginContainer}>
			<div className={classes.LoginTypes}>
				<h1> WELCOME </h1>
				<h3>TO ROLEPLAY</h3>
				<p> choose your account type </p>
				<div className={classes.UserButtonsDiv}>
				</div>
			</div>

			<div className={classes.LoginTypes}>
				{<UserForm />}
			</div>
		</section>
	);
};

export default Login;
