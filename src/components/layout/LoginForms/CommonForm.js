import classes from './LoginForms.module.css';
import { useState } from 'react';
// import { IconButton } from '@material-ui/core';
// import { Person } from '@material-ui/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
// import axios from 'axios';
// import Loader from '../Loader/Loader';
// import { Navigate, useHistory } from 'react-router-dom';

const validationSchema = Yup.object().shape({
	email: Yup.string().required('Your Email is required').email('Please enter a valid email'),
	employee_id: Yup.string().required('Employee Id is required'),
});

const CommonForm = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	// const history = useHistory();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
		mode: 'onSubmit',
	});

	const userInfo = sessionStorage.getItem('coachingAuth');

	// disable login page if you are logged in already
	// if (userInfo !== null) return <Navigate to="/learn" />;

	const onLoginFormSubmit = (data) => {
		const myFormData = data;
		setLoading(true);
		setError('');
	};

	return (
		<section className={classes.FormContainer}>
			<h3>USER LOGIN</h3>

			{/* <IconButton>
				<Person />
			</IconButton> */}

			<form className={classes.Form} onSubmit={handleSubmit(onLoginFormSubmit)}>
				<div className={classes.InputField}>
					<label htmlFor="email"> email </label>
					<input
						type="email"
						id="email"
						placeholder="Your Email Address"
						{...register('email')}
						required
					/>
					{errors.email && <p className={classes.ErrorMsg}>{errors.email?.message}</p>}
				</div>

				<div className={classes.InputField}>
					<label htmlFor="employee_id"> employee ID </label>
					<input
						type="text"
						// inputMode=""
						id="employee_id"
						placeholder="Your Employee ID"
						{...register('employee_id')}
						required
					/>
					{errors.employee_id && <p className={classes.ErrorMsg}>{errors.employee_id?.message}</p>}
				</div>
				{/* {error && <p>{error}</p>} */}

				<button type="submit"> sign in </button>
			</form>

			<div className={classes.Host}>
				<p> Powered By:</p>
			</div>
			<Toaster />
		</section>
	);
};

export default CommonForm;
