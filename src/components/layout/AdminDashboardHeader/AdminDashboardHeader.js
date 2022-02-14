import classes from './AdminDashboardHeader.module.css';
import { Subject } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from '../../../images/logo.png';
import { NavbarBrand } from 'react-bootstrap';
import { useState } from 'react';

const AdminDashboardHeader = ({ setCurrentPage, pages }) => {
	// const history = useHistory();
	const navigate = useNavigate();

	const logUserOut = () => {
		sessionStorage.removeItem('rpAdmin');
		toast.success('Admin Logout Successfully');
		navigate('/login');
	};
	const [activeTabId, setActiveTabId] = useState(
		localStorage.getItem('currentPage') ? Number(localStorage.getItem('currentPage')) : 0
	);

	const handleClickTabLink = (id) => {
		setCurrentPage(id);
		localStorage.setItem('currentPage', id);
		setActiveTabId(id);
	};
	return (
		<header className={classes.DashboardHeader}>
			<NavbarBrand href="/" className={classes.Brand}>
				<img alt="Roleplay Services" src={logo} className={classes.Logo} />
			</NavbarBrand>

			<nav className={classes.DashboardNav}>
				<ul>
					{pages.map((page, index) => (
						<li
							key={page.id}
							onClick={() => handleClickTabLink(index)}
							className={`${activeTabId === index ? classes.ActiveTab : ''}`}
						>
							{/* <page.Icon /> */}
							<span> {page.title} </span>
						</li>
					))}
				</ul>
				<button className={classes.LogOutBtn} onClick={logUserOut}>
					sign out
				</button>
			</nav>
		</header>
	);
};

export default AdminDashboardHeader;
