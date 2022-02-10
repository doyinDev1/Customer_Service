import { useEffect, useState } from 'react';
import classes from './Dashboard.module.css';
import { Assessment, Error } from '@material-ui/icons';
import { Toaster } from 'react-hot-toast';
import AdminDashboardHeader from '../../layout/AdminDashboardHeader/AdminDashboardHeader';
// import AdminSideNav from '../../layout/AdminSideNav/AdminSideNav';
import CreateUsers from '../CreateUsers/CreateUsers';
import Reports from './Reporting/Reports';
import UserLogs from './UserLogs';

const Dashboard = () => {
	// const [isOpen, setIsOpen] = useState(true);
	const [currentPage, setCurrentPage] = useState(
		localStorage.getItem('currentPage') ? Number(localStorage.getItem('currentPage')) : 0
	);

	// const toggleSidebar = () => {
	// 	setIsOpen(!isOpen);
	// };

	const pages = [
		{
			id: 1,
			title: 'Summary / Reports',
			Icon: Assessment,
			page: <Reports />,
		},
		{
			id: 2,
			title: 'User Logs',
			Icon: Error,
			page: <UserLogs />,
		},
		{
			id: 3,
			title: 'Add Users',
			Icon: Error,
			page: <CreateUsers />,
		},
	];

	return (
		<>
			<AdminDashboardHeader setCurrentPage={setCurrentPage} pages={pages} />
			{/* <AdminSideNav
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				setCurrentPage={setCurrentPage}
				pages={pages}
			/> */}
			<div className={classes.PageWrapper}>
				{pages.map((page, index) =>
					currentPage === index ? <div key={index}>{page.page}</div> : ''
				)}
			</div>

			<Toaster />
		</>
	);
};

export default Dashboard;
