import classes from './CreateUsers.module.css';
import xlsx from 'xlsx';
import { Modal, Spinner } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { CheckCircle } from '@material-ui/icons';
import { isValidEmail } from '../../helpers/validateExcel';
import { ExportToExcel, exportToCSV } from '../../helpers/ExportToExcel';
import { currentDateTime } from '../../helpers/getCurrentTime';
// import { useUploadBulkUsers } from '../../../DataQueries/companyHooks/mutation';
import { SampleData } from './sampleData';
import { useRef } from 'react';
import { convertSheetToFile } from './uploadExcelFile';
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Config } from '../../../Config';

const BulkUploadModal = (props) => {
	const userInfo = JSON.parse(sessionStorage.getItem('rpAdmin'));
	const inputRef = useRef(null);
	const [uploadingFile, setUploadingFile] = useState(false);
	const [userFile, setUserFile] = useState(null);

	const sendFileRequest = (data) => {
		setUploadingFile(true);
		axios
			.post(`${Config.url.API_URL}/bulk-upload`, data, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => {
				// console.log(res);
				setUploadingFile(false);
				Swal.fire('File Uploaded', 'File Uploaded Successfully', 'success');
				if (res.data.error.length > 0) {
					const currentTime = currentDateTime();
					const allErrors = [...res.data.error];
					const exportErrors = [];

					for (let i = 0; i < allErrors.length; i++) {
						let tempError = {};
						tempError.FileErrorLog = allErrors[i];
						exportErrors.push(tempError);
					}
					exportToCSV(exportErrors, `Roleplay_File-Upload-Error${currentTime}`);
				}
				props.hideModal();
			})
			.catch((error) => {
				// console.log(error);
				setUploadingFile(false);
				Swal.fire('Oops!', 'Something went wrong with file upload!', 'error');
				props.hideModal();
			});
	};

	// const { uploadBulkUsers, uploadBulkUsersStatus } = useUploadBulkUsers();
	const onFileUpload = (e) => {
		e.preventDefault();
		props.setValidationErrors([]);

		// if theres a file but no file uploaded
		if (!e.target.files[0]) {
			props.setValidatingFile(false);
			props.setValidationErrors([]);
			props.setValidatedData({
				valid: [],
				invalid: [],
			});
		}

		if (e.target.files[0]) {
			setUserFile(e.target.files[0]);
			const reader = new FileReader();
			reader.onloadstart = () => {
				props.setValidatingFile(true);
			};
			let tempValidatedData = {
				valid: [],
				invalid: [],
			};
			reader.onload = (e) => {
				const data = e.target.result;
				const workbook = xlsx.read(data, { type: 'array' });
				const sheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[sheetName];
				const json = xlsx.utils.sheet_to_json(worksheet);
				// console.log(json);
				const templateFields = Object.keys(SampleData[0]);
				const fieldsArr = Object.keys(json[0]);

				let templateErrors = [];

				// compare columns
				for (let i = 0; i < templateFields.length; i++) {
					// console.log(templateFields[i], fieldsArr[i]);
					if (templateFields[i] !== fieldsArr[i]) {
						templateErrors.push({ column: 'columns not matching' });

						break;
					}
				}

				if (templateErrors.length > 0) {
					props.setValidationErrors((validationErrors) => [
						...validationErrors,
						{ line: '', error: 'File does not match template provided' },
					]);
					return props.setValidatingFile(false);
				}

				for (let i = 0; i < json.length; i++) {
					let data = 'valid';
					if (!isValidEmail(json[i]['email'])) {
						props.setValidationErrors((validationErrors) => [
							...validationErrors,
							{
								line: `Row number ${i + 2} `,
								error: `Invalid Email`,
							},
						]);
						data = 'invalid';
					}

					// loop through all the fields
					for (let j = 0; j < fieldsArr.length; j++) {
						if (!json[i][fieldsArr[j]] || json[i][fieldsArr[j]] === '') {
							props.setValidationErrors((validationErrors) => [
								...validationErrors,
								{
									line: `Row number ${i + 2}, ${fieldsArr[j]}:`,
									error: 'Blank Column',
								},
							]);
							data = 'invalid';
						}
					}

					if (data === 'valid') {
						tempValidatedData.valid.push(json[i]);
					} else {
						tempValidatedData.invalid.push(json[i]);
					}
				}
				props.setValidatingFile('done');
				props.setValidatedData(tempValidatedData);
				// console.log(tempValidatedData);

				// const emailErrors = validateEmailArray(json);
				// console.log(emailErrors);
			};
			reader.readAsArrayBuffer(e.target.files[0]);
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		// call function to upload file
		const csvFile = convertSheetToFile(props.validatedData.valid);
		// console.log(csvFile);
		const formData = new FormData();
		formData.append('upload-file', csvFile);
		formData.append('token', '23erdsaxcvf65yut9igh');

		sendFileRequest(formData);
	};

	// this function is for when you need to download invalid data and
	// also upload valid data
	const onUploadAndDownloadFile = async (e) => {
		e.preventDefault();
		const currentTime = currentDateTime();
		// prevent empty fields in the first row from removing the column totally
		// e.g if name is empty for first row, the name column gets removed totally
		let tempInvalidData = [];

		const templateFields = Object.keys(SampleData[0]);

		for (let i = 0; i < props.validatedData.invalid.length; i++) {
			const tempData = {};
			for (let j = 0; j < templateFields.length; j++) {
				tempData[templateFields[j]] = props.validatedData.invalid[i][templateFields[j]] || '';
			}
			tempInvalidData.push(tempData);
		}

		exportToCSV(tempInvalidData, `SSH-InvalidData-${currentTime}`);

		// call function to upload file

		const csvFile = convertSheetToFile(props.validatedData.valid);
		const formData = new FormData();
		formData.append('upload_file', csvFile);
		formData.append('token', userInfo.token);

		sendFileRequest(formData);
	};

	const onReUploadFile = (e) => {
		e.preventDefault();

		inputRef.current.click();
	};

	return (
		<Modal
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			show={props.showModal}
			onHide={props.hideModal}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter" className={classes.ModalTitle}>
					Download and Upload File
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className={classes.DownloadCSV}>
					<h6>CSV Requirements</h6>
					<p>
						Download the csv template to match all the requirements and ensure smooth upload of the
						file
					</p>
					<ExportToExcel apiData={SampleData} fileName="Upload Template" />
				</div>
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header className={classes.Header}>Import Users</Accordion.Header>
						<Accordion.Body className={classes.CourseContainer} style={{ padding: '0px' }}>
							<form className={classes.Form}>
								<div className={classes.InputContainer}>
									<label htmlFor="file">
										Upload excel File
										{props.validatingFile === true && <Spinner size="sm" animation="border" />}
									</label>
									<input
										type="file"
										placeholder="Upload Csv File"
										id="file"
										onChange={onFileUpload}
										ref={inputRef}
										// accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
										accept=".xls,.xlsx,.csv"
									/>
								</div>
								<div className={classes.ValidationResult}>
									{props.validationErrors.length > 0 &&
										props.validationErrors.map((error, i) => (
											<p key={`${error.line}${i}`} className={classes.Error}>
												Error: {error.line} {error.error}
											</p>
										))}
									{props.validatingFile === 'done' && props.validationErrors.length > 0 && (
										<div>
											<button
												disabled={uploadingFile}
												className={classes.Info}
												onClick={onUploadAndDownloadFile}
											>
												Upload the Valid Data & Download Invalid Data{' '}
												{uploadingFile && <Spinner size="sm" animation="border" />}
											</button>
											<button
												disabled={uploadingFile}
												className={classes.ReUpload}
												onClick={onReUploadFile}
											>
												Re-upload File
											</button>
										</div>
									)}
									{props.validatingFile === 'done' && props.validationErrors.length === 0 && (
										<p className={classes.Success}>
											<CheckCircle />
											No Errors found in file
										</p>
									)}
								</div>
								{!(props.validatingFile === 'done' && props.validationErrors.length > 0) && (
									<button
										disabled={
											props.validatingFile === false ||
											props.validationErrors.length > 0 ||
											uploadingFile
										}
										onClick={onSubmit}
									>
										Submit {uploadingFile && <Spinner size="sm" animation="border" />}
									</button>
								)}
							</form>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Modal.Body>
		</Modal>
	);
};

export default BulkUploadModal;
