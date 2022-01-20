import UserHeader from '../../layout/UserHeader/UserHeader';
import classes from './ViewCourse.module.css';
import CoursePic from '../../../images/call2.jpg'
import CourseCard from '../../layout/CourseCard/CourseCard';
import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto'
import { useState } from 'react';
import CourseDescription from '../../layout/CourseDescription/CourseDescription';
import CourseCurriculum from '../../layout/CourseCard/CourseCurriculum/CourseCurriculum';

const ViewCourse = (props) => {

	const [pageKey, setPageKey] = useState(0)


	return (
		<>
			<UserHeader />
			<section className={classes.MainSection}>
				<h4 className={classes.PageHeader}>Visual Elements Of User Interface Design</h4>
				<div className={classes.CourseContainer}>
					<div className={classes.ImageContainer}>
						<img className={classes.CourseImage} src={CoursePic} alt="course" />
					</div>
				</div>
				<div className={classes.CourseInformation}>
					<ScrollableTabsButtonAuto
						value={pageKey}
						setValue={setPageKey}
						tabLabels={['Course Description', 'Curriculum']}
					/>
					{pageKey === 0 && <CourseDescription />}
					{pageKey === 1 && <CourseCurriculum />}
				</div>
			</section>
		</>
	);
};

export default ViewCourse;
