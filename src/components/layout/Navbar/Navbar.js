import { Nav, Container, Navbar } from 'react-bootstrap';
import Roleplay from '../../../images/logo.png';
import classes from './Navbar.module.css';
import Navitem from '../Navitem/NavItem';

const CustomNavbar = () => {
	return (
		<Navbar expand="lg" className={classes.Navbar}>
			<Container>
				<Navbar.Brand href="/" className={classes.Brand}>
					<img alt="Roleplay Services" src={Roleplay} className={classes.Logo} />
				</Navbar.Brand>
				{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
				{/* <Navbar.Collapse id="basic-navbar-nav"> */}
				<Nav>
					<Navitem route="/login" label="Login" />
				</Nav>
				{/* </Navbar.Collapse> */}
			</Container>
		</Navbar>
	);
};

export default CustomNavbar;
