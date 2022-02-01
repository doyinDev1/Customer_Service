// import { ErrorOutline } from '@mui/icons-material'
import { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
// import {
// 	// useFetchAndSearchCompanyUsers,
// 	useFetchOneCandidateReport,
// } from '../../../DataQueries/companyHooks/fetch'
import SearchDropDown from '../../../layout/DropDown/SearchDropDown';
// import GroupedBars from '../../layout/Charts/GroupedBars'
import classes from './Reporting.module.css';
import common from '../../../../commonStyles/common.module.css';
// import DataStatusIndicator from '../../layout/AdminDataStatusNotes/DataStatusIndicator'
// import Loader from '../../layout/Loader/Loader'
// import { currentDateTime } from '../../../helpers/getCurrentTime'
// import RenderDownloadXLSXButton from '../../../helpers/generateExcelFile'

const SingleCandidateReport = () => {
	const [candidateDetails, setCandidateDetails] = useState({});
	const [userID, setUserID] = useState(null);

	// const {
	// 	status: oneCandidateReportStatus,
	// 	data: oneCandidateReport,
	// 	isFetching,
	// } = useFetchOneCandidateReport(userID && userID)

	// var a = '3/2'
	// var split = a.split('/')
	// var result = parseInt(split[0], 10) / parseInt(split[1], 10)
	// alert(result)

	//variable for response from oneCandidateReport
	// useEffect(() => {
	// 	setCandidateDetails(
	// 		oneCandidateReport?.candidateDetails &&
	// 			oneCandidateReport?.candidateDetails[0]
	// 	)
	// }, [oneCandidateReport?.candidateDetails])

	// Table header row and XLSX header row
	const header = [
		'Course Name',
		'Started',
		'Progress',
		'Score (%)',
		'Score Range (%)',
		'National Average (%)',
		'Assessment',
	];

	return (
		<div className={classes.SubContainer}>
			{/* <p>Candidate view</p> */}

			<div className={classes.InnerContainer}>
				<div className={classes.SearchSelection}>
					<SearchDropDown setUserID={setUserID} />
				</div>

				<div className={classes.CompanyItems}>
					<div className={classes.CourseDetails}>
						<div className={classes.CourseValues}>
							<p>Candidate Details</p>
							<div className={classes.CourseValuesValues}>
								<p>
									Employee ID:
									<span>{candidateDetails?.employeeID}</span>
								</p>
								<p>
									Name:
									<span>{candidateDetails?.usersName}</span>
								</p>
								<p>
									Email:
									<span>{candidateDetails?.userEmail}</span>
								</p>
								<p>
									Role:
									<span>{candidateDetails?.roleName}</span>
								</p>
								<p>
									Grade:
									<span>{candidateDetails?.userGrade}</span>
								</p>
								<p>
									Location:
									<span>{candidateDetails?.location}</span>
								</p>
								<p>
									Gender:
									<span>{candidateDetails?.userGender}</span>
								</p>
							</div>
							{/* {isFetching && (
								<div className={classes.LoadingScreen}>
									<Loader />
								</div>
							)} */}
						</div>

						<div className={classes.CourseValuesChart}>
							<p>Candidate Score Summary</p>
							<div className={classes.CourseChart}>
								{/* {oneCandidateReport?.candidateSummary && (
									<GroupedBars
										title='Course Performance'
										colors={['#f17e3b', '#f5b579CC']}
										candidateCourseData={oneCandidateReport?.candidateSummary}
										fileDownloadName={`${candidateDetails?.employeeID} - ${
											candidateDetails?.usersName
										}'s Course(s) Performance ${currentDateTime()}`}
									/>
								)}
								{isFetching && (
									<div className={classes.LoadingScreen}>
										<Loader />
									</div>
								)} */}
							</div>
							{/* {oneCandidateReport?.candidateSummary?.length <= 0 && (
								<div className={classes.LoadingScreen2}>
									<div className={common.DataError} style={{ padding: '20px' }}>
										<ErrorOutline style={{ fontSize: '100px' }} />
										<p>
											Candidate has no course record yet
										</p>
									</div>
								</div>
							)} */}
						</div>
					</div>

					<div className={common.TableWrapper}>
						<div className={common.TableExtras}>
							<h3>
								Total Count:{' '}
								{/* {oneCandidateReportStatus === 'loading' ? (
									<Spinner />
								) : (
									oneCandidateReport?.candidateSummary?.length
								)} */}
							</h3>
							<div className={common.TableInputs}>
								{/* <input type='search' placeholder='Search' /> */}

								{/* <RenderDownloadXLSXButton
									list={oneCandidateReport?.candidateSummary}
									header={header}
									fileName={`${
										candidateDetails?.usersName
									}'s Course(s) Overview ${currentDateTime()}`}
									loopRef='singleCandidateReport'
								/> */}
							</div>
						</div>
						<Table className={common.Table} hover responsive>
							<thead>
								<tr>
									{header.map((n) => (
										<th key={n}> {n} </th>
									))}
								</tr>
							</thead>

							<tbody>
								{/* {oneCandidateReportStatus === 'success' &&
									oneCandidateReport?.candidateSummary?.length >= 1 &&
									oneCandidateReport?.candidateSummary?.map((emp, index) => (
										<tr key={index}>
											<td>{emp.courseName}</td>
											<td>
												<button
													className={`${
														classes[`${emp.started ? 'YES' : 'NO'}`]
													}`}>
													{emp.started ? 'YES' : 'NO'}
												</button>
											</td>
											<td>
												{emp.moduleProgress} (
												{
													// eslint-disable-next-line no-eval
													(eval(emp.moduleProgress) * 100).toFixed()
												}
												%)
											</td>
											<td>
												{emp.candidateSummary[0]?.candidateScore
													? emp.candidateSummary[0]?.candidateScore
													: 0}
											</td>
											<td>{emp.averageRange ? emp.averageRange : '-'}</td>
											<td>
												{emp.candidateSummary[1]?.nationalAverage
													? emp.candidateSummary[1]?.nationalAverage
													: 0}
											</td>
											<td>
												<button className={`${classes[`${emp.status}`]}`}>
													{emp.status}
												</button>
											</td>
										</tr>
									))} */}
							</tbody>
						</Table>
					</div>

					{/* <DataStatusIndicator
						status={oneCandidateReportStatus}
						dataNode1={oneCandidateReport?.candidateSummary}
						dataNode2={oneCandidateReport?.candidateSummary}
						noDataMessage={'Candidate has no course assignment/record yet'}
					/> */}
				</div>
			</div>
		</div>
	);
};

export default SingleCandidateReport;
