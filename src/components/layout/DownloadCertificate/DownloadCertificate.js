import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import PDFCertificate from '../PDFCertificate/PDFCertificate';
import { CloudDownloadOutlined } from '@material-ui/icons';
import { Button, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import classes from './DownloadCertificate.module.css';

const DownloadCertificate = ({ status }) => {
	const [downloading, setDownloading] = useState(false);
	const userInfo = JSON.parse(sessionStorage.getItem('rpUser'));

	const generatePDFDoc = async () => {
		setDownloading(true);
		const blob = await pdf(<PDFCertificate />).toBlob();
		saveAs(blob, `${userInfo.name}.pdf`);
		setDownloading(false);
	};

	return (
		<Button
			disabled={!(status === 'pass')}
			onClick={generatePDFDoc}
			className={classes.DownloadBtn}
			variant="outlined-success"
		>
			{downloading && <Spinner animation="border" variant="success" size="sm" />}
			<CloudDownloadOutlined /> Download Certificate
		</Button>
	);
};

export default DownloadCertificate;
