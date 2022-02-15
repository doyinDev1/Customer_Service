import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Config } from '../../../Config';
import CustomModal from '../CustomModal/CustomModal';
import classes from './LoginModal.module.css';
import { Spinner } from 'react-bootstrap';

const validationSchema = Yup.object().shape({
	email: Yup.string().required('Your Email is required').email('Please enter a valid email'),
	employee_id: Yup.string().required('Employee Id is required'),
	// access_code: Yup.string().required('Access code is required'),
});

const LoginModal = (props) => {
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
		mode: 'onSubmit',
	});

	const onUserFormSubmit = (data) => {
		const myFormData = {
			email: data.email,
			employee_id: data.employee_id,
		};

		setLoading(true);

		axios
			.post(`${Config.url.API_URL}/login`, myFormData)
			.then((res) => {
				// console.log(res.data);
				const userData = JSON.stringify({
					name: res.data.data[0].name,
					email: res.data.data[0].email,
					employee_id: res.data.data[0].employee_id,
					token: res.data.data[0].token,
				});
				sessionStorage.setItem('rpUser', userData);
				toast.success('Login Successfully');
				props.hideModal();
				// setLoading(false);
			})
			.catch((err) => {
				// console.log(err);
				const errMsg = err?.response?.data?.message
					? err?.response?.data?.message
					: 'Failed to Login!';
				toast.error(errMsg);
				setLoading(false);
			});
	};
	return (
		<CustomModal
			onHide={props.hideModal}
			showModal={props.showModal}
			fullscreen
			title="Login as a User"
		>
			<form onSubmit={handleSubmit(onUserFormSubmit)}>
				<h4 style={{ fontWeight: 700 }} className="mb-4 pb-3">
					User
				</h4>
				<div className={classes.form_group}>
					<input
						className={classes.form_style}
						type="email"
						id="email"
						placeholder="Your Email Address"
						{...register('email')}
						required
					/>
					<i className={`${classes.input_icon} uil uil-at`}></i>

					{errors.email && <p className={classes.ErrorMsg}>{errors.email?.message}</p>}
				</div>
				<div className={`${classes.form_group} mt-2`}>
					<input
						className={classes.form_style}
						type="text"
						// inputMode=""
						id="employee_id"
						placeholder="Your Employee ID"
						{...register('employee_id')}
						required
					/>
					<i className={`${classes.input_icon} uil uil-lock-alt`}></i>
					{errors.employee_id && <p className={classes.ErrorMsg}>{errors.employee_id?.message}</p>}
				</div>

				{!loading && (
					<button type="submit" className={`${classes.btn} mt-4`}>
						{' '}
						sign in{' '}
					</button>
				)}

				{loading && <Spinner animation="border" variant="secondary" className="mt-4" />}
			</form>
		</CustomModal>
	);
};

export default LoginModal;
