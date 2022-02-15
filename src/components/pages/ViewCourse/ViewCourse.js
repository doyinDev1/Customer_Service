import UserHeader from '../../layout/UserHeader/UserHeader';
import classes from './ViewCourse.module.css';
// import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto';
import { useState } from 'react';
import CourseDescription from '../../layout/CourseDescription/CourseDescription';
import CourseCurriculum from '../../layout/CourseCard/CourseCurriculum/CourseCurriculum';
import { useModulesLoggedIn } from '../../../DataQueries/userHooks/fetch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../../layout/Navbar/Navbar';

const ViewCourse = () => {
	const location = useLocation();
	const courseID = location.pathname.split('learn/')[1];

	const userInfo = JSON.parse(sessionStorage.getItem('rpUser'));

	const { props } = location?.state;
	const { status, data } = useModulesLoggedIn(courseID);
	const navigate = useNavigate();

	return (
		<>
			{userInfo ? <UserHeader /> : <Navbar />}
			<section className={classes.MainSection}>
				<div className={classes.Back} onClick={() => navigate(-1)}>
					<ArrowBackIcon />
					<span className={classes.BackSpan}>go back</span>
				</div>
				<div className={classes.CourseContainer}>
					<div className={classes.HeadingSection}>
						<div className={classes.CourseFor}>
							<h4 className={classes.PageHeader}>{props.courseTitle}</h4>
							<p className={classes.CourseForText}>{props.courseFor}</p>
							{userInfo !== null && status === 'success' && (
								<p>Completed: {data?.modules[0]?.status === 'pass' ? '100' : '0'}%</p>
							)}
						</div>
						<div className={classes.ImageContainer}>
							<img className={classes.CourseImage} src={props.courseImage} alt="course" />
						</div>
					</div>
				</div>
				<div className={classes.CourseInformation}>
					{/* <ScrollableTabsButtonAuto
						value={pageKey}
						setValue={setPageKey}
						tabLabels={['Course Description', 'Curriculum']}
					/> */}
					{userInfo && status === 'success' && (
						<CourseCurriculum progress={data?.progress} modules={data?.modules} />
					)}
					{!userInfo && (
						<>
							<button
								onClick={() =>
									navigate('/login', {
										state: {
											from: location,
											props: location.state.props,
										},
									})
								}
							>
								Login to View the Module
							</button>
						</>
					)}

					<CourseDescription location={location.state.props} />
				</div>
			</section>
		</>
	);
};

export default ViewCourse;
