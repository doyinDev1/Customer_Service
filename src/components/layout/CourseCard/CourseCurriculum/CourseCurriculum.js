import React from 'react';
import classes from './CourseCurriculum.module.css';
import { useState } from 'react';
import Iframe from 'react-iframe';
import { Modal } from 'react-bootstrap';
import { CheckCircleRounded } from '@material-ui/icons';

const CourseCurriculum = (props) => {
	const [IframeModal, setIframeModal] = useState(false);
	const userInfo = JSON.parse(sessionStorage.getItem('rpUser'));
	const progress =
		(Number(props.progress?.split('/')[0]) / Number(props.progress?.split('/')[1])) * 100;

	return (
		<div className={classes.CourseCurriculum}>
			<div className={classes.CourseOverviewCard}>
				<button
					onClick={() => {
						setIframeModal(true);
					}}
					className={classes.ModuleName}
				>
					{progress === 100 && <CheckCircleRounded />} {props.modules[0].module_title}{' '}
				</button>

				<Modal show={IframeModal} fullscreen onHide={() => setIframeModal(false)}>
					<Modal.Header closeButton>
						<Modal.Title style={{ textTransform: 'capitalize' }}>
							{props.modules[0].module_title}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Iframe
							url={`https://customerservice.roleplaycareers.com/course/Common%20Email%20Complaints/story.html?module_id=${props.modules[0].module_id}token=${userInfo.token}`}
							// url={`https://learningplatform.sandbox.9ijakids.com/ModuleFolders/${urlLinks}/Going%20The%20Extra%20Mile/story.html`}
							// position="absolute"
							width="95%"
							// id={selectedModule.moduleID}
							// className="myClassname"
							height="95%"
						/>
					</Modal.Body>
				</Modal>
			</div>
		</div>
	);
};

export default CourseCurriculum;
