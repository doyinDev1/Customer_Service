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


export const useFetchAllUsers = () => {
	const adminUser = JSON.parse(sessionStorage.getItem('rpAdmin'));
	const fetchAllUsers = async () => {
		try {
			const { data } = await axios.post(`${Config.url.API_URL}/all-users`, {
				token: adminUser.token,
			});
			return data.data;
		} catch (error) {
			return {
				errorRes:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			};
		}
	};
	const { status, data, isFetching } = useQuery(
		['RoleplayUsers', adminUser],
		() => fetchAllUsers(),
		{
			keepPreviousData: false,
			refetchOnWindowFocus: true,
		}
	);
	return { status, data, isFetching };
};


// SEARCH ROLEPLAY USERS
export const useFetchAndSearchRoleplayUsers = (searchRequest) => {
	const adminUser = JSON.parse(sessionStorage.getItem('rpAdmin'));
	const params = {
		token: adminUser.token,
		searchRequest: searchRequest
	};
	const fetchRoleplaySearchUsers = async () => {
		try {
			const { data } = await axios.get(`${Config.url.API_URL}/search-user`, params);
			return data
			} catch (error) {
			return {
				errorRes:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			};
		}
	};

	const { status, data, isFetching } = useQuery(
		['RoleplayUsers', adminUser, searchRequest],
		() => fetchRoleplaySearchUsers(),
		{
			keepPreviousData: true,
			refetchOnWindowFocus: true,
		}
	);
	return { status, data, isFetching };
};