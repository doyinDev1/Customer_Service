import classes from './UserHeader.module.css';
import Logo from '../../../images/logo.png';
// import LoremLogo from '../../../images/loremexcellentiam_logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AccountCircleRounded } from '@material-ui/icons';

const UserHeader = () => {
	const navigate = useNavigate();
	const userInfo = JSON.parse(sessionStorage.getItem('rpUser'));

	const onLogout = () => {
		toast.success('Successfully logged out!');
		sessionStorage.removeItem('rpUser');
		navigate('/login');
	};
// console.log(userInfo)
	return (
		<nav className={classes.UserHeader}>
			<Link to="/" className={classes.LogoContainer}>
				<img src={Logo} alt="Roleplay Services" className={classes.Logo} />
			</Link>
			{/* <h2>Learn</h2> */}
			{/* <div className="LoremLogo">
				<p>Powered By:</p>
				<img src={LoremLogo} alt="loremexcellentiam" />
			</div> */}
			<div className={classes.NavItems}>
				<div className={classes.UserInfo}>
					<AccountCircleRounded />
					<h6>{userInfo.name}</h6>
				</div>
				<button onClick={onLogout}>Log Out</button>
			</div>
		</nav>
	);
};

export default UserHeader;
