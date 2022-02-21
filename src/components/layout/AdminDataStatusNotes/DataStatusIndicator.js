import {
	ErrorOutline,
	// GridViewOutlined,
	StickyNote2Outlined,
	LibraryBooksOutlined,
} from '@mui/icons-material'
import Loader from '../../layout/CustomSpinner/CustomSpinner';
import classes from './DataStatusIndicator.module.css'
// import dissatisfaction from '../../../images/dissatisfaction.png'

const DataStatusIndicator = ({
	status,
	dataNode1,
	dataNode2,
	Icon,
	noDataMessage,
}) => {
	return (
		<div>
			{/* IF DATA IS STILL FETHCING */}
			{status === 'loading' && (
				<div className={classes.DataError}>
					<Loader />
				</div>
			)}

			{/* IF DATA HAS FETCHED BUT HAS NO LENGTH OR WHEN SEARCHING HAS NO LENGTH */}
			{status === 'success' && dataNode1?.length <= 0 && (
				<div className={classes.DataError}>
					<div style={{ marginBottom: '25px', textAlign: 'center' }}>
						{Icon ? (
							<Icon className={classes.Icon} />
						) : (
							<LibraryBooksOutlined className={classes.Icon} />
						)}

						{/* <img src={dissatisfaction} alt='dissatisfaction' height='80px' /> */}
					</div>
					<p>
						<ErrorOutline style={{ fontSize: '20px', marginRight: '10px' }} />{' '}
						{noDataMessage ? noDataMessage : 'Nothing found'}
					</p>
				</div>
			)}

			{/* IF DATA FETCH ENCOUNTERED AN ERROR */}
			{(status === 'error' || dataNode2?.errorRes) && (
				<div className={classes.DataError}>
					<div style={{ marginBottom: '25px', textAlign: 'center' }}>
						<ErrorOutline className={classes.Icon} />{' '}
					</div>
					<p>{dataNode2?.errorRes || 'failed to fetch data'}</p>
				</div>
			)}
		</div>
	)
}

export default DataStatusIndicator
