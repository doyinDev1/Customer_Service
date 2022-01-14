import { FormContainer, Form, InputField, ErrorMsg, Host } from './styles';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { IconButton } from '@material-ui/core';
import { SupervisorAccount } from '@material-ui/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import Loader from '../Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import loremexcellentiam_logo from '../../../images/loremexcellentiam_logo.jpg';
import { Config } from '../../../Config';

const validationSchema = Yup.object().shape({
	access_code: Yup.string().required('Access code is required'),
});

const AdminForm = () => {
	const history = useHistory();
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
		const myFormData = data;
		setLoading(true);
		setError('');

		axios
			.post(`${Config.url.API_URL}/admin_login`, myFormData)
			.then((res) => {
				setLoading(false);
				// setError(null);
				if (res.status === 200) {
					sessionStorage.setItem('Coaching_Admin', JSON.stringify('Coaching_Admin'));
					toast.success(res.data.message + ' , Hello Admin');
					history.push('/admin');
				} else {
					toast.error(res.data.error);
				}
			})
			.catch((err) => {
				setLoading(false);
				if (err.response) {
					// setError(err.response.data.error);
					return toast.error(err.response.data.error);
				}
				toast.error('Failed to Login!');
			});
	};

	return (
		<FormContainer>
			<h3>ADMIN LOGIN</h3>

			<IconButton>
				<SupervisorAccount />
			</IconButton>

			<Form onSubmit={handleSubmit(onLoginFormSubmit)} admin>
				<InputField>
					<label htmlFor="access_code"> access code </label>
					<input
						type="number"
						id="access_code"
						placeholder="Your access code"
						{...register('access_code')}
					/>
					{errors.access_code && <ErrorMsg>{errors.access_code?.message}</ErrorMsg>}
				</InputField>

				{loading ? <Loader /> : <button type="submit"> sign in </button>}

				<Host>
					<p>
						{' '}
						Powered By: <img src={loremexcellentiam_logo} alt="loremexcellentiam" />{' '}
					</p>
				</Host>
			</Form>

			<Toaster />
		</FormContainer>
	);
};

export default AdminForm;
