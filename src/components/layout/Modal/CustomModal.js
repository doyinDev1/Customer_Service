import { Modal, Button } from 'react-bootstrap';
import classes from './CustomModal.module.css';

const CustomModal = ({ showModal, onHide, title, children, ...otherProps }) => {
	return (
		<Modal {...otherProps} show={showModal} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter" className={classes.ModalTitle}>
					{title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className={classes.ModalBodyTitle}>{children}</Modal.Body>
			<Modal.Footer>
				<Button onClick={onHide} variant="danger">
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CustomModal;
