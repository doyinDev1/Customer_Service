import classes from './UserHeader.module.css';
import Logo from '../../../images/logo.png';
// import LoremLogo from '../../../images/loremexcellentiam_logo.jpg';
// import { useHistory } from 'react-router';
import toast from 'react-hot-toast';

const UserHeader = () => {
	// const history = useHistory();

	const onLogout = () => {
		toast.success('Successfully logged out!');
	};

	return (
		<nav className={classes.UserHeader}>
			<div className={classes.LogoContainer}>
				<img src={Logo} alt="Roleplay Services" className={classes.Logo} />
			</div>
			{/* <h2>Learn</h2> */}
			{/* <div className="LoremLogo">
				<p>Powered By:</p>
				<img src={LoremLogo} alt="loremexcellentiam" />
			</div> */}
			<div className={classes.NavItems}>
				<button onClick={onLogout}>Log Out</button>
			</div>
		</nav>
	);
};

export default UserHeader;
