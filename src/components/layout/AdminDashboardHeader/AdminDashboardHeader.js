import classes from './AdminDashboardHeader.module.css';
import { Subject } from '@material-ui/icons';

const AdminDashboardHeader = ({ toggleSidebar }) => {
	// const history = useHistory();

	const logUserOut = () => {
		// sessionStorage.removeItem('Coaching_Admin');
		// history.push('/');
	};
	return (
		<header className={classes.DashboardHeader}>
			<div>
				<Subject onClick={toggleSidebar} />
			</div>

			<button className={classes.LogOutBtn} onClick={logUserOut}>
				sign out
			</button>
		</header>
	);
};

export default AdminDashboardHeader;
