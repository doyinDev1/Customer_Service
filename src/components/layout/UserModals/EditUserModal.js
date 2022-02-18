import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useUpdateCompanyUser } from '../../../DataQueries/adminHooks/mutation'
import classes from './UserModal.module.css'
import { Modal } from 'react-bootstrap'

const EditUserModal = ({ editModal, selectedUser, hideEditModal }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()

	const { editCompanyUserStatus, editCompanyUser } = useUpdateCompanyUser()

	const onEditUserFormSubmit = (data) => {
		const formData = data
		// const userInfo = JSON.parse(sessionStorage.getItem('rpAdmin'));

		formData.userToken = selectedUser.usertoken
		
		// formData.userToken = userInfo.usertoken

		editCompanyUser(formData)
			.then((res) => {
				Swal.fire({
					icon: 'success',
					text: 'User Successfully Updated',
					showConfirmButton: false,
					timer: 1500,
				})
				reset()
				hideEditModal()
			})
			.catch((err) => {
				if (err.response && err.response.data) {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: err.response.data.message,
					})
				}
				return null
			})
	}
console.log(selectedUser)
	useEffect(() => {
		if (selectedUser) {
			reset({
				employee_id: selectedUser?.employee_id,
				name: selectedUser?.name,
				email: selectedUser?.email,
				location: selectedUser?.location,
				gender: selectedUser?.gender,
				grade: selectedUser?.grade,
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
					onSubmit={handleSubmit(onEditUserFormSubmit)}>
					<div className={classes.InputField}>
						<label htmlFor='employee_id'>Employee ID</label>
						<input
							type='text'
							name='employee_id'
							id='employee_id'
							{...register('employee_id', {
								required: true,
							})}
						/>
						{errors.employee_id && (
							<p className={classes.ErrorMsg}>Employee ID is required</p>
						)}
					</div>

					<div className={classes.InputField}>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							id='name'
							{...register('name', {
								required: true,
							})}
						/>
						{errors.name && (
							<p className={classes.ErrorMsg}>Name is required</p>
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
						<label htmlFor='gender'>Gender</label>
						<select
							{...register('gender', {
								required: true,
							})}
							name='gender'>
							<option value='Male'>Male</option>
							<option value='Female'>Female</option>
						</select>
						{errors.gender && (
							<p className={classes.ErrorMsg}>Gender is required</p>
						)}
					</div>
					<button type='submit' disabled={editCompanyUserStatus === 'loading'}
>
						{editCompanyUserStatus === 'loading'
							? 'Saving Changes'
							: 'Save Changes'}
							
					</button>
				</form>
			</Modal.Body>
		</Modal>
	)
}

export default EditUserModal
