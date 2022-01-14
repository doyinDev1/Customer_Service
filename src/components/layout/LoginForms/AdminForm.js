import classes from './LoginForms.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { IconButton } from '@material-ui/core';
// import { SupervisorAccount } from '@material-ui/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

// import { Config } from '../../../Config';

const validationSchema = Yup.object().shape({
	access_code: Yup.string().required('Access code is required'),
});

const AdminForm = () => {
	// const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
		mode: 'onSubmit',
	});

	const onLoginFormSubmit = (data) => {
		// const myFormData = data;
		setLoading(true);
		setError('');
	};

	return (
		<section className={classes.FormContainer}>
			<h3>ADMIN LOGIN</h3>

			{/* <IconButton>
				<SupervisorAccount />
			</IconButton> */}

			<form className={classes.Form} onSubmit={handleSubmit(onLoginFormSubmit)} admin>
				<div className={classes.InputField}>
					<label htmlFor="access_code"> access code </label>
					<input
						type="number"
						id="access_code"
						placeholder="Your access code"
						{...register('access_code')}
					/>
					{errors.access_code && <p className={classes.ErrorMsg}>{errors.access_code?.message}</p>}
				</div>

				<button type="submit"> sign in </button>

				<div className={classes.Host}>
					<p> Powered By:</p>
				</div>
			</form>

			<Toaster />
		</section>
	);
};

export default AdminForm;
