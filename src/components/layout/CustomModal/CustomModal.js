import classes from './CustomModal.module.css';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ showModal, onHide, title, children, closeButton, ...otherProps }) => {
	return (
		<Modal {...otherProps} show={showModal} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter" className={classes.ModalTitle}>
					{title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			{closeButton && (
				<Modal.Footer>
					<Button onClick={onHide} variant="danger">
						Close
					</Button>
				</Modal.Footer>
			)}
		</Modal>
	);
};
export default CustomModal;
