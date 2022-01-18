import React from 'react';
import classes from './UserForm.module.css';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';

const validationSchema = Yup.object().shape({
	email: Yup.string().required('Your Email is required').email('Please enter a valid email'),
	employee_id: Yup.string().required('Employee Id is required'),
	access_code: Yup.string().required('Access code is required'),
});

function UserForm() {
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

	const onUserFormSubmit = (data) => {
		const myFormData = data;
		setLoading(true);
		setError('');
	};

	const onAdminFormSubmit = (data) => {
		const myFormData = data;
		setLoading(true);
		setError('');
	};

	return (
		<>
			<section>
				<div className={classes.sections}>
					<div className={classes.container}>
						<div className={`row full-height justify-content-center`}>
							<div className={`col-12 text-center align-self-center py-5 `}>
								<div
									className={` ${classes.sections} ${[
										['pb-5'],
										['pt-5'],
										['pt-sm-2'],
										['text-center'],
									].join(' ')}`}
								>
									<h6 className="mb-0 pb-3">
										<span
											style={{
												textTransform: 'uppercase',
												fontWeight: '700',
												paddingLeft: 20,
												paddingRight: 20,
											}}
										>
											User{' '}
										</span>
										<span
											style={{
												textTransform: 'uppercase',
												fontWeight: '700',
												paddingLeft: 20,
												paddingRight: 20,
											}}
										>
											Admin
										</span>
									</h6>
									<input className={classes.checkbox} type="checkbox" id="reg-log" name="reg-log" />
									<label for="reg-log"></label>
									<div className={`${classes.card_3d_wrap} mx-auto`}>
										<div className={classes.card_3d_wrapper}>
											<div className={classes.card_front}>
												<div className={classes.center_wrap}>
													<div className={` ${classes.sections} text-center`}>
														<form onSubmit={handleSubmit(onUserFormSubmit)}>
															<h4 style={{ fontWeight: 700 }} className="mb-4 pb-3">
																User
															</h4>
															<div className={classes.form_group}>
																<label style={{ color: 'black' }} htmlFor="email">
																	{' '}
																	email{' '}
																</label>
																<input
																	className={classes.form_style}
																	type="email"
																	id="email"
																	placeholder="Your Email Address"
																	{...register('email')}
																	required
																/>
																{errors.email && (
																	<p className={classes.ErrorMsg}>{errors.email?.message}</p>
																)}

																{/* <i className="input_icon uil uil-at"></i> */}
															</div>
															<div className={`${classes.form_group} mt-2`}>
																<label style={{ color: 'black' }} htmlFor="employee_id">
																	{' '}
																	employee ID{' '}
																</label>
																<input
																	className={classes.form_style}
																	type="text"
																	// inputMode=""
																	id="employee_id"
																	placeholder="Your Employee ID"
																	{...register('employee_id')}
																	required
																/>
																{errors.employee_id && (
																	<p className={classes.ErrorMsg}>{errors.employee_id?.message}</p>
																)}

																<i className="input_icon uil uil-lock-alt"></i>
															</div>
															<button type="submit" className={`${classes.btn} mt-4`}>
																{' '}
																sign in{' '}
															</button>
														</form>
													</div>
												</div>
											</div>
											<div className={classes.card_back}>
												<div className={classes.center_wrap}>
													<div className={`${classes.sections} text-center`}>
														<form onSubmit={handleSubmit(onAdminFormSubmit)}>
															<h4 style={{ fontWeight: 700 }} className="mb-4 pb-3">
																Admin
															</h4>
															<div className={classes.form_group}>
																<label style={{ color: 'black' }} htmlFor="access_code">
																	{' '}
																	access code{' '}
																</label>
																<input
																	className={classes.form_style}
																	type="number"
																	id="access_code"
																	placeholder="Your access code"
																	{...register('access_code')}
																	required
																/>
																{errors.access_code && (
																	<p className={classes.ErrorMsg}>{errors.access_code?.message}</p>
																)}
															</div>

															<button type="submit" className={`${classes.btn} mt-4`}>
																{' '}
																Sign in{' '}
															</button>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Toaster />
			</section>
		</>
	);
}

export default UserForm;
