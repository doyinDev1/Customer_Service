import axios from 'axios';
import { useQuery } from 'react-query';
import { Config } from '../../Config';

export const useFecthFilters = () => {
	const adminUser = JSON.parse(sessionStorage.getItem('rpAdmin'));
	const fecthFilters = async () => {
		try {
			const { data } = await axios.post(`${Config.url.API_URL}/filters`, {
				token: adminUser.token,
			});
			console.log(data);

			return {
				locations: data.location,
				grade: data.grade,
				gender: data.gender,
				roleName: data.roleName,
			};
		} catch (error) {
			return {
				errorRes:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			};
		}
	};

	const { status, data } = useQuery(['filters', adminUser], () => fecthFilters(), {
		keepPreviousData: true,
		refetchOnWindowFocus: true,
	});

	return { status, data };
};
