import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
// import Swal from 'sweetalert2'
// import { useUpdateCompanyUser } from '../../../DataQueries/companyHooks/mutation'
import classes from './UserModal.module.css'
import { Modal } from 'react-bootstrap'

const EditUserModal = ({ editModal, selectedUser, hideEditModal }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()

	// const { editCompanyUserStatus, editCompanyUser } = useUpdateCompanyUser()

	const onEditUserFormSubmit = (data) => {
		const formData = data
		formData.userToken = selectedUser.usertoken

		// editCompanyUser(formData)
		// 	.then((res) => {
		// 		Swal.fire({
		// 			icon: 'success',
		// 			text: 'User Successfully Updated',
		// 			showConfirmButton: false,
		// 			timer: 1500,
		// 		})
		// 		reset()
		// 		hideEditModal()
		// 	})
		// 	.catch((err) => {
		// 		if (err.response && err.response.data) {
		// 			Swal.fire({
		// 				icon: 'error',
		// 				title: 'Oops...',
		// 				text: err.response.data.message,
		// 			})
		// 		}
		// 		return null
		// 	})
	}

	useEffect(() => {
		if (selectedUser) {
			reset({
				employeeID: selectedUser?.employeeID,
				firstName: selectedUser?.userFirstName,
				lastName: selectedUser?.userLastname,
				email: selectedUser?.userEmail,
				location: selectedUser?.location,
				gender: selectedUser?.userGender,
				grade: selectedUser?.userGrade,
			})
		} else {
			reset({})
		}
	}, [reset, selectedUser])

	return (
		<Modal
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			show={editModal}
			onHide={hideEditModal}>
			<Modal.Header closeButton>
				<Modal.Title
					id='contained-modal-title-vcenter'
					className={classes.ModalTitle}>
					EDIT USER
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form
					className={classes.FormArea}
					// onSubmit={handleSubmit(onEditUserFormSubmit)}
                    >
					<div className={classes.InputField}>
						<label htmlFor='employeeID'>Employee ID</label>
						<input
							type='text'
							name='employeeID'
							id='employeeID'
							{...register('employeeID', {
								required: true,
							})}
						/>
						{errors.employeeID && (
							<p className={classes.ErrorMsg}>Employee ID is required</p>
						)}
					</div>

					<div className={classes.InputField}>
						<label htmlFor='firstName'>First Name</label>
						<input
							type='text'
							name='firstName'
							id='firstName'
							{...register('firstName', {
								required: true,
							})}
						/>
						{errors.firstName && (
							<p className={classes.ErrorMsg}>First name is required</p>
						)}
					</div>

					<div className={classes.InputField}>
						<label htmlFor='lastName'>Last Name</label>
						<input
							type='text'
							name='lastName'
							id='lastName'
							{...register('lastName', {
								required: true,
							})}
						/>
						{errors.firstName && (
							<p className={classes.ErrorMsg}>Last name is required</p>
						)}
					</div>

					<div className={classes.InputField}>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							id='email'
							{...register('email', {
								required: true,
							})}
						/>
						{errors.email && (
							<p className={classes.ErrorMsg}>Email address is required</p>
						)}
					</div>

					<div className={classes.InputField}>
						<label htmlFor='location'>Location</label>
						<input
							type='text'
							name='location'
							id='location'
							{...register('location', {
								required: true,
							})}
						/>
						{errors.location && (
							<p className={classes.ErrorMsg}>Location is required</p>
						)}
					</div>
					<div className={classes.InputField}>
						<label htmlFor='grade'>Grade</label>
						<input
							type='text'
							name='grade'
							id='grade'
							{...register('grade', {
								required: true,
							})}
						/>
						{errors.grade && (
							<p className={classes.ErrorMsg}>Grade is required</p>
						)}
					</div>

					<div className={classes.InputField}>
						<label htmlFor='role'>Gender</label>
						<select
							{...register('gender', {
								required: true,
							})}
							name='gender'>
							<option value='M'>Male</option>
							<option value='F'>Female</option>
						</select>
						{errors.gender && (
							<p className={classes.ErrorMsg}>Gender is required</p>
						)}
					</div>

					{/* <button type='submit' disabled={editCompanyUserStatus === 'loading'}>
						{editCompanyUserStatus === 'loading'
							? 'Saving Changes'
							: 'Save Changes'}
					</button> */}
                    <button type='submit' disabled={false}>
                    Save Changes
					</button>
				</form>
			</Modal.Body>
		</Modal>
	)
}

export default EditUserModal
