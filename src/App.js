import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Learn from './components/pages/Learn/Learn';
import Login from './components/pages/Login/Login';
import ViewCourse from './components/pages/ViewCourse/ViewCourse';
import AdminUser from './components/pages/AdminUser/Dashboard';

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/learn" element={<Learn />} />
				<Route exact path="/learn/:courseID" element={<ViewCourse />} />
				<Route exact path="/admin-dashboard" element={<AdminUser />} />
			</Routes>
		</>
	);
}

export default App;
