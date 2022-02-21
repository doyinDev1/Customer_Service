import { useState } from 'react';
import Loader from '../../layout/CustomSpinner/CustomSpinner';
import classes from './CreateUsers.module.css';
import { Config } from '../../../Config';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import BulkUploadModal from './BulkUploadModal';

const CreateUsers = () => {
	const { handleSubmit, register, formState, reset } = useForm();
	const { errors } = formState;
	const [loading, setLoading] = useState(false);
	const [validatingFile, setValidatingFile] = useState(false);
	const [validationErrors, setValidationErrors] = useState([]);
	const [showModal, setShowModal] = useState(false);
	// const userInfo = JSON.parse(localStorage.getItem('rpAdmin'));
	const [validatedData, setValidatedData] = useState({
		valid: [],
		invalid: [],
	});
	const onHide = () => {
		setShowModal(false);
		setValidatingFile(false);
		setValidationErrors([]);
	};

	const onAddUserFormSubmit = (data) => {
		const myFormData = {
			...data,
		};
		setLoading(true);

		axios
			.post(
				// "https://afternoon-ridge-35420.herokuapp.com/https://learningplatform.sandbox.9ijakids.com/api/api.php/login",
				`${Config.url.API_URL}/add-user`,
				myFormData
			)
			.then((res) => {
				toast.success(res.data.message);
				reset();

				setLoading(false);
			})
			.catch((err) => {
				console.log(err.res);
				setLoading(false);
				toast.error('User email not Company Email!');
			});

		// alert(JSON.stringify(data));
	};

	return (
		<>
			<div className={classes.ImportBtn}>
				<button onClick={() => setShowModal(true)}>Bulk Upload Users</button>
			</div>
			<div className={classes.FormContainer}>
				<form className={classes.AddUserForm} onSubmit={handleSubmit(onAddUserFormSubmit)}>
					<h2> ADD USER </h2>
					<div className={classes.InputBox}>
						{/* <label htmlFor="firstName">Employee First Name</label> */}
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Employee Name"
							autoFocus
							{...register('name', {
								required: true,
							})}
						/>
						{errors.firstName && (
							<p className={classes.ErrorMessage}>Please enter user Name!</p>
						)}
					</div>
					<div className={classes.InputBox}>
						{/* <label htmlFor="lastName">Employee Last Name</label> */}
						<input
							type="text"
							name="division"
							id="division"
							placeholder="Employee division"
							{...register('division', {
								required: true,
							})}
						/>
						{errors.lastName && (
							<p className={classes.ErrorMessage}>Please enter user last name!</p>
						)}
					</div>
					<div className={classes.InputBox}>
						{/* <label htmlFor="email">Employee Email</label> */}
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Employee Email Address"
							autoComplete="false"
							{...register('email', {
								required: true,
							})}
						/>
						{errors.email && <p className={classes.ErrorMessage}>Please enter user email!</p>}
					</div>
					{/* <div className={classes.InputBox}>
						<input
							type="number"
							name="tel"
							id="tel"
							placeholder="Employee Phone Number"
							{...register('tel', {
								required: true,
							})}
						/>
						{errors.tel && <p className={classes.ErrorMessage}>Please enter user phone number</p>}
					</div> */}
					<div className={classes.InputBox}>
						{/* <label htmlFor="employeeID">Employee Location</label> */}
						<input
							type="text"
							name="location"
							id="location"
							placeholder="Employee Location"
							{...register('location', {
								required: true,
							})}
						/>
						{errors.location && (
							<p className={classes.ErrorMessage}>Please enter user phone number</p>
						)}
					</div>
					<div className={classes.InputBox}>
						{/* <label htmlFor="employeeID">Employee ID</label> */}
						<input
							type="text"
							name="employeeID"
							id="employeeID"
							placeholder="Employee ID"
							{...register('employee_id', {
								required: true,
							})}
						/>
						{errors.employeeID && (
							<p className={classes.ErrorMessage}>Please enter employee ID</p>
						)}
					</div>
					<div className={classes.InputBox}>
						{/* <label htmlFor="grade">Employee Grade</label> */}
						<input
							type="text"
							name="grade"
							id="grade"
							placeholder="Employee Grade"
							{...register('grade', {
								required: true,
							})}
						/>
						{errors.grade && <p className={classes.ErrorMessage}>Please enter employee grade</p>}
					</div>
					{/* <div className={classes.InputBox}>
						<label htmlFor="role">Employee Role</label>
						<select {...register('roleName')} name="role">
							<option value="Agent">Agent</option>
							<option value="Supervisor">Supervisor</option>
							<option value="Manager">Manager</option>
						</select>
						{errors.roleName && <p className={classes.ErrorMsg}>{errors.roleName?.message}</p>}
					</div> */}
					<div className={classes.InputBox}>
						<label htmlFor="gender">Employee Gender</label>
						<select {...register('gender')} name="gender">
							<option value="M">Male</option>
							<option value="F">Female</option>
						</select>
						{errors.gender && <p className={classes.ErrorMsg}>{errors.gender?.message}</p>}
					</div>
					{loading ? <Loader /> : <button type="submit">Create User</button>}
					<Toaster />
				</form>
			</div>
			<BulkUploadModal
				showModal={showModal}
				hideModal={onHide}
				validatingFile={validatingFile}
				validatedData={validatedData}
				validationErrors={validationErrors}
				setValidatingFile={setValidatingFile}
				setValidatedData={setValidatedData}
				setValidationErrors={setValidationErrors}

			/>
		</>
	);
};

export default CreateUsers;
