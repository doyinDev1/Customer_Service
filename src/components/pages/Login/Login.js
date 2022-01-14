import { useState } from 'react';
import classes from './Login.module.css';
import AdminForm from '../../layout/LoginForms/AdminForm';
import CommonForm from '../../layout/LoginForms/CommonForm';
// import { CheckCircleOutlined } from '@material-ui/icons';

const Login = () => {
	const [activeForm, setActiveForm] = useState('common');

	const handleUserButton = (e) => {
		setActiveForm(e.target.id);
	};

	return (
		<section className={classes.LoginContainer}>
			<div className={classes.LoginTypes}>
				{/* <img src="https://www.accessbankplc.com/App_Themes/AccessBankGroup/img/logo-main.png" alt="Access_Brand" height="50px" width="170px" /> */}
				<h1> WELCOME </h1>
				<p> choose your account type </p>
				<div className={classes.UserButtonsDiv}>
					<button
						id="common"
						onClick={handleUserButton}
						style={{ backgroundColor: activeForm === 'common' ? 'var(--orange)' : '' }}
						className={classes.CommonUserBtn}
					>
						sign in as user
					</button>

					<button
						id="admin"
						onClick={handleUserButton}
						style={{ backgroundColor: activeForm === 'admin' ? 'var(--blue)' : '' }}
						className={classes.AdminBtn}
					>
						sign in as admin
					</button>
				</div>
			</div>

			<div className={classes.LoginTypes}>
				{activeForm === 'admin' && <AdminForm />}
				{activeForm === 'common' && <CommonForm />}
			</div>
		</section>
	);
};

export default Login;
