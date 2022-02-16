import { Button } from 'react-bootstrap';
import CustomModal from '../Modal/CustomModal';
import classes from './FirstLoginModal.module.css';
import { AssessmentRounded, HeadsetMicRounded, CardMembershipRounded } from '@material-ui/icons';

const FirstLoginModal = (props) => {
	const userInfo = JSON.parse(sessionStorage.getItem('rpUser'));
	return (
		<CustomModal
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			showModal={props.showModal}
			onHide={props.hideModal}
			title={`Welcome ${userInfo.name}`}
		>
			<p className={classes.Paragraph}>
				You have been enrolled on the program to provide you with enhanced knowledge and skills to
				help you succeed in your role as a call centre agent. The program focuses on key skill areas
				including basic communication skills, handling difficult phone calls and customers, managing
				customer etc
			</p>
			<div className={classes.ContentContainer}>
				<div>
					<h3>How It Works</h3>
					<p className={classes.Paragraph}>
						Login with your credentials to access your dashboard with the list of courses you are
						enrolled on. You are free to study the course at your own pace and are expected to
						complete the program within 3 months.
					</p>
				</div>
				<div className={classes.FeatureBox}>
					<AssessmentRounded />
					<div>
						<h6>Assessment</h6>
						<p className={classes.Paragraph}>
							Once you have completed a course you will participate in a multiple-choice assessment,
							a pass mark of 75% is required. The online test is marked automatically, receiving an
							instant grade. You are expected to complete the assessment within 4 weeks of starting
							the course
						</p>
					</div>
				</div>
				<div className={classes.FeatureBox}>
					<CardMembershipRounded />
					<div>
						<h6>Certificate</h6>
						<p>
							Once you have completed your assessment you will be awarded a free certificate in PDF
							format which can be downloaded immediately.
						</p>
					</div>
				</div>
				<div className={classes.FeatureBox}>
					<HeadsetMicRounded />
					<div>
						<h6>Support</h6>
						<p className={classes.Paragraph}>
							If you have any questions regarding login or accessing the course material, contact
							support by clicking the Live Chat icon at the button of the screen.
						</p>
					</div>
				</div>
			</div>
			<Button onClick={() => props.hideModal()} className={classes.ExitButton}>
				Access My Courses
			</Button>
		</CustomModal>
	);
};

export default FirstLoginModal;
