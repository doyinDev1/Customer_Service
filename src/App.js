import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Learn from './components/pages/Learn/Learn';
import Login from './components/pages/Login/Login';
import ViewCourse from './components/pages/ViewCourse/ViewCourse';
import AdminUser from './components/pages/AdminUser/Dashboard';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PDFViewer from './components/layout/PDFViewer/PDFVIewer';
import UserAuthRoute from './components/hoc/AuthRoutes/UserAuthRoute';
import AdminAuthRoute from './components/hoc/AuthRoutes/AdminAuthRoute';

function App() {
	const { pathname } = useLocation();
	const userAuth = sessionStorage.getItem('rpUser');

	const [isLoggedIn, setIsloggedIn] = useState(userAuth);

	useEffect(() => {
		const userAuth = sessionStorage.getItem('rpUser');
		setIsloggedIn(userAuth);
	}, [pathname]);

	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				{!isLoggedIn && <Route exact path="/login" element={<Login />} />}
				<Route exact path="/learn/:courseID" element={<ViewCourse />} />
				<Route
					exact
					path="/learn"
					element={
						<UserAuthRoute>
							<Learn />
						</UserAuthRoute>
					}
				/>
				<Route exact path="/pdf" element={<PDFViewer />} />
				<Route
					exact
					path="/admin-dashboard"
					element={
						<AdminAuthRoute>
							<AdminUser />
						</AdminAuthRoute>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
