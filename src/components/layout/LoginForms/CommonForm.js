import { FormContainer, Form, InputField, ErrorMsg, Host } from './styles';
import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import loremexcellentiam_logo from '../../../images/loremexcellentiam_logo.jpg';
import Loader from '../Loader/Loader';
import { Config } from '../../../Config';
import { Redirect, useHistory } from 'react-router';
import { capitalizeString, splitString } from '../../../util';
import { fetchModuleProgress } from '../../../redux/actionCreators/course';

const validationSchema = Yup.object().shape({
	email: Yup.string().required('Your Email is required').email('Please enter a valid email'),
	employee_id: Yup.string().required('Employee Id is required'),
});

const CommonForm = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const history = useHistory();

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
	if (userInfo !== null) return <Redirect to="/learn" />;

	const onLoginFormSubmit = (data) => {
		const myFormData = data;
		setLoading(true);
		setError('');

		axios
			.post(`${Config.url.API_URL}/login`, myFormData)
			.then((res) => {
				toast.success('Login Successful');
				// console.log(res);
				// history.push('/learn');

				const fullName = splitString(res.data.user.name).map((name) => capitalizeString(name));

				const userInfo = JSON.stringify({
					fullName: res.data.user.name,
					userId: res.data.user.user_id,
					employeeId: res.data.user.employee_id,
					email: res.data.user.email,
					firstName: fullName[0],
					lastName: fullName[1],
					otherName: fullName[2],
				});

				// console.log(res.data);
				fetchModuleProgress(res.data.user.employee_id, res.data.user.user_id);

				setLoading(false);
				setError('');

				sessionStorage.setItem('coachingAuth', userInfo);

				history.push({
					pathname: '/learn',
					first_login: res.data.user.first_login,
				});
			})
			.catch((error) => {
				setLoading(false);
				// console.log(error);

				if (error.response) {
					setError(
						error.response && error.response.data.error ? error.response.data.error : error.message
					);

					console.log(error.response);
					return toast.error(
						error.response && error.response.data.error ? error.response.data.error : error.message
					);
				}
				toast.error('Failed to Login!');
			});
	};

	return (
		<FormContainer>
			<h3>USER LOGIN</h3>

			<IconButton>
				<Person />
			</IconButton>

			<Form onSubmit={handleSubmit(onLoginFormSubmit)}>
				<InputField>
					<label htmlFor="email"> email </label>
					<input
						type="email"
						id="email"
						placeholder="Your Email Address"
						{...register('email')}
						required
					/>
					{errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
				</InputField>

				<InputField>
					<label htmlFor="employee_id"> employee ID </label>
					<input
						type="text"
						// inputMode=""
						id="employee_id"
						placeholder="Your Employee ID"
						{...register('employee_id')}
						required
					/>
					{errors.employee_id && <ErrorMsg>{errors.employee_id?.message}</ErrorMsg>}
				</InputField>
				{/* {error && <p>{error}</p>} */}

				{!loading ? <button type="submit"> sign in </button> : <Loader />}
			</Form>

			<Host>
				<p>
					{' '}
					Powered By: <img src={loremexcellentiam_logo} alt="loremexcellentiam" />{' '}
				</p>
			</Host>
			<Toaster />
		</FormContainer>
	);
};

export default CommonForm;
