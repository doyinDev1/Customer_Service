import { useLocation, Navigate } from 'react-router-dom';

const AdminAuthRoute = ({ children }) => {
	const userAuth = sessionStorage.getItem('rpAdmin');
	const location = useLocation();

	if (!userAuth) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};

export default AdminAuthRoute;
