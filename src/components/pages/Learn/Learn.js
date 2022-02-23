// import ProgressBar from 'react-bootstrap/ProgressBar';
import UserHeader from '../../layout/UserHeader/UserHeader';
import classes from './Learn.module.css';
import { Link } from 'react-router-dom';
// import { CloseOutlined } from '@material-ui/icons';
// import { Button } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import CourseCard from '../../layout/CourseCard/CourseCard';
import DownloadCertificate from '../../layout/DownloadCertificate/DownloadCertificate';
// import toast from 'react-hot-toast';
import { useFecthEnrolledCourses } from '../../../DataQueries/userHooks/fetch';
import CustomSpinner from '../../layout/CustomSpinner/CustomSpinner';
import { useState } from 'react';
import AssessmentModal from '../../layout/AssessmentModal/AssessmentModal';
import FirstLoginModal from '../../layout/FirstLoginModal/FirstLoginModal';

const Learn = () => {
	const userInfo = JSON.parse(sessionStorage.getItem('rpUser'));

	const { status, data } = useFecthEnrolledCourses();
	const checkAssesment = data?.enrolledCourses.every(
		(c) => c.modules_completed === c.modules_count
	);
	const [firstLoginModal, setFirstLoginModal] = useState(
		userInfo.firstLogin !== undefined ? userInfo.firstLogin : false
	);

	const onHideFirstLoginModal = () => {
		const tempData = { ...userInfo };
		tempData.firstLogin = false;
		const updatedUserInfo = JSON.stringify(tempData);
		sessionStorage.setItem('rpUser', updatedUserInfo);
		setFirstLoginModal(false);
	};

	const [showAssessmentModal, setAssessmentModal] = useState(false);

	return (
		<>
			<UserHeader />
			<section className={classes.MainSection}>
				<h2 className={classes.PageHeader}>All Courses </h2>

				{status === 'loading' && <CustomSpinner />}

				<div className={classes.CourseContainer}>
					{status === 'success' &&
						data?.enrolledCourses &&
						data.enrolledCourses.map((course) => (
							<CourseCard
								key={course.courseTitle}
								courseTitle={course.course_name}
								courseDescription={course.course_description}
								completedModule={course.modules_completed}
								numberOfModules={course.modules_count}
								courseID={course.course_id}
								courseFor={course.courseFor}
								list={course.list}
								courseImage={course.courseImage}
							/>
						))}
				</div>

				{status === 'success' && (
					<div className={classes.Assessment}>
						<h2 className={classes.Heading}>Assessment</h2>
						<div className={classes.AssessmentInfo}>
							{/* <h3>Course Assessment</h3> */}
							<p>
								Take the course assessment and get access to your certificate when you pass the
								assessment
							</p>
							<div className={classes.ButtonContainer}>
								<Button
									variant="success"
									disabled={!checkAssesment}
									onClick={() => setAssessmentModal(true)}
									className={classes.AssessmentButton}
								>
									Take Assessment
								</Button>

								<DownloadCertificate status={data?.assessment[0]?.status} />
							</div>
						</div>
					</div>
				)}

				{data?.assessment[0]?.path && (
					<AssessmentModal
						showAssessmentModal={showAssessmentModal}
						assessment={data?.assessment[0]}
						hideAssessmentModal={() => setAssessmentModal(false)}
					/>
				)}

				{/* {loading && <Loader />}
				{error && <h6>{error}</h6>} */}
			</section>
			<Toaster />

			{status === 'success' && data?.firstLogin === true && (
				<FirstLoginModal showModal={firstLoginModal} hideModal={onHideFirstLoginModal} />
		
			)}
		</>
	);
};

export default Learn;
