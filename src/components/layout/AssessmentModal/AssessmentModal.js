import Iframe from 'react-iframe';
import { Modal } from 'react-bootstrap';

const AssessmentModal = ({ assessment, showAssessmentModal, hideAssessmentModal }) => {
	const userInfo = JSON.parse(sessionStorage.getItem('rpUser'));

	return (
		<Modal show={showAssessmentModal} fullscreen onHide={hideAssessmentModal}>
			<Modal.Header closeButton>
				<Modal.Title style={{ textTransform: 'capitalize' }}>
					Mastery Certificate Assessment
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Iframe
					url={`${assessment.path}?module_id=${assessment.module_id}&token=${userInfo.token}`}
					// url={`https://learningplatform.sandbox.9ijakids.com/ModuleFolders/${urlLinks}/Going%20The%20Extra%20Mile/story.html`}
					// position="absolute"
					width="95%"
					// id={selectedModule.moduleID}
					// className="myClassname"
					height="95%"
				/>
			</Modal.Body>
		</Modal>
	);
};

export default AssessmentModal;
