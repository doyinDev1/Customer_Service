import { Nav, Container, Navbar } from 'react-bootstrap';
import Roleplay from '../../../images/logo.png';
import classes from './Navbar.module.css';
import Navitem from '../Navitem/NavItem';

const CustomNavbar = () => {
	return (
		<Navbar className={classes.Navbar}>
			<Container className={classes.NavBrandContainer}>
				<Navbar.Brand href="/" className={classes.Brand}>
					<img alt="Roleplay Services" src={Roleplay} className={classes.Logo} />
				</Navbar.Brand>
			</Container>

			{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
			{/* <Navbar.Collapse id="basic-navbar-nav"> */}
			<div className={classes.NavContainer}>
				<Container>
					<Nav className={classes.Nav}>
						<Navitem route="/login" label="Login" />
					</Nav>
					{/* </Navbar.Collapse> */}
				</Container>
			</div>
		</Navbar>
	);
};

export default CustomNavbar;
