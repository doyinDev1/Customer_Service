import { useLocation, Navigate } from 'react-router-dom';

const UserAuthRoute = ({ children }) => {
	const userAuth = sessionStorage.getItem('rpUser');
	const location = useLocation();

	if (!userAuth) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};

export default UserAuthRoute;
