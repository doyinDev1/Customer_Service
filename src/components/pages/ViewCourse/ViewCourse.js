import UserHeader from '../../layout/UserHeader/UserHeader';
import classes from './ViewCourse.module.css';
import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto'
import { useState } from 'react';
import CourseDescription from '../../layout/CourseDescription/CourseDescription';
import CourseCurriculum from '../../layout/CourseCard/CourseCurriculum/CourseCurriculum';
import { useLocation } from 'react-router-dom'

const ViewCourse = () => {

	const [pageKey, setPageKey] = useState(0)
	const location = useLocation()
	const { props } = location.state

	return (

		<>
			<UserHeader />
			<section className={classes.MainSection}>
				<h4 className={classes.PageHeader}>{props.courseTitle}</h4>
				<div className={classes.CourseContainer}>
					<div className={classes.ImageContainer}>
						<img className={classes.CourseImage} src={props.courseImage} alt="course" />
					</div>
				</div>
				<div className={classes.CourseInformation}>
					<ScrollableTabsButtonAuto
						value={pageKey}
						setValue={setPageKey}
						tabLabels={['Course Description', 'Curriculum']}				
					/>
					{pageKey === 0 && <CourseDescription location={location.state.props}/>}
					{pageKey === 1 && <CourseCurriculum />}
				</div>
			</section>
		</>
	);
};

export default ViewCourse;
