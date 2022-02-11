import UserHeader from '../../layout/UserHeader/UserHeader';
import classes from './ViewCourse.module.css';
import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto';
import { useState } from 'react';
import CourseDescription from '../../layout/CourseDescription/CourseDescription';
import CourseCurriculum from '../../layout/CourseCard/CourseCurriculum/CourseCurriculum';
import { useLocation } from 'react-router-dom';
import { useModulesLoggedIn } from '../../../DataQueries/userHooks/fetch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
const ViewCourse = () => {
	const [pageKey, setPageKey] = useState(0);
	const location = useLocation();
	const courseID = location.pathname.split('learn/')[1];

	const { props } = location.state;
	const { status, data } = useModulesLoggedIn(courseID);
	const navigate = useNavigate();

	return (
		<>
			<UserHeader />
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
							{status === 'success' && (
								<p>Completed: {data?.modules[0]?.status === 'pass' ? '100' : '0'}%</p>
							)}
						</div>
						<div className={classes.ImageContainer}>
							<img className={classes.CourseImage} src={props.courseImage} alt="course" />
						</div>
					</div>
				</div>
				<div className={classes.CourseInformation}>
					<ScrollableTabsButtonAuto
						value={pageKey}
						setValue={setPageKey}
						tabLabels={['Course Description', 'Curriculum']}
					/>
					{pageKey === 0 && <CourseDescription location={location.state.props} />}
					{pageKey === 1 && <CourseCurriculum progress={data?.progress} modules={data?.modules} />}
				</div>
			</section>
		</>
	);
};

export default ViewCourse;
