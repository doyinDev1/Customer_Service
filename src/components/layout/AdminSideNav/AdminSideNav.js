// import { Underlay, SideBarTop, SideBarContainer, SideBarMenuWrapper, Host, BrandLogo, Toggler, SideBarMenu } from './styles'
import { Subject } from '@material-ui/icons';
import { useRef, useEffect, useState } from 'react';
import useWindowDimensions from '../../helpers/UseWindowSize';
import logo from '../../../images/logo.png';
import classes from './AdminSideNav.module.css';

const AdminSideNav = ({ isOpen, setIsOpen, setCurrentPage, pages }) => {
	const sidebarRef = useRef(null);
	const underlayRef = useRef(null);
	const { width } = useWindowDimensions();
	const [activeTabId, setActiveTabId] = useState(
		localStorage.getItem('currentPage') ? Number(localStorage.getItem('currentPage')) : 0
	);

	//check realtime screen width to control side-drawer behaviour
	useEffect(() => {
		if (width >= 1022) {
			setIsOpen(true);
		}
	}, [setIsOpen, width]);

	//controls hidding and showing of sidebar and its underlay
	useEffect(() => {
		if (isOpen) {
			sidebarRef.current.style.left = 0;
			underlayRef.current.style.visibility = 'visible';
		} else {
			sidebarRef.current.style.left = `-300px`;
			underlayRef.current.style.visibility = 'hidden';
		}
	}, [isOpen]);

	//prevent page scroll when underlay is shown on smaller screens
	useEffect(() => {
		if (isOpen && width < 1024) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, width]);

	//handle closemodal/sidebar on click outside modal
	const closeModal = (e) => {
		if (underlayRef.current === e.target) setIsOpen(false);
	};

	//handle set reference id for page to be shown
	//handles close sidebar on tab link click
	const handleClickTabLink = (id) => {
		setCurrentPage(id);
		localStorage.setItem('currentPage', id);
		setActiveTabId(id);
		if (isOpen && width < 1025) {
			setIsOpen(false);
		}
	};

	//describes the property of active tab link on click
	const active = {
		backgroundColor: 'var(--orange)',
		color: 'white',
		boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
	};

	return (
		<div className={classes.UnderLay} ref={underlayRef} onClick={closeModal}>
			<div className={classes.SideBarContainer} ref={sidebarRef}>
				<div>
					<div className={classes.BrandLogo}>
						<div className={classes.Toggler}>
							<Subject onClick={() => setIsOpen(false)} />
						</div>
						<img src={logo} alt="Roleplay Logo" height="40px" />
					</div>

					<div className={classes.SideBarMenuWrapper}>
						<h3> ADMIN PANEL </h3>

						<div className={classes.SideBarMenu}>
							<ul>
								{pages.map((page, index) => (
									<li key={page.id} onClick={() => handleClickTabLink(index)}>
										<p style={activeTabId === index ? active : {}}>
											<page.Icon />
											<span> {page.title} </span>
										</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* <Host>
					<img src={loremexcellentiam_logo} alt="loremexcellentiam" height="70px" />
					Powered By:
					<span> lorem excellentiam </span>
				</Host> */}
			</div>
		</div>
	);
};

export default AdminSideNav;
