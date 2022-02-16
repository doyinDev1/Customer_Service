import axios from 'axios';
import { useQuery } from 'react-query';
import { Config } from '../../Config';
import { additionalData } from './sampleData';

export const useFecthEnrolledCourses = () => {
	const userInfo = JSON.parse(sessionStorage.getItem('rpUser'));

	const fetchUserCourses = async () => {
		try {
			// MAJOR TODO
			// need another endpoint to fetch courses when user is not logged in
			const { data } = await axios.post(`${Config.url.API_URL}/enrolled-courses`, {
				token: userInfo?.token
					? userInfo.token
					: '02y5j2dz14dhz33003r1gg3bz0qw60gv6lf0ujv24eg2cjzma3nd15vgko534k625f30hanw2qi6v2l4',
			});

			const userCourses = data.enrolledCourses.map((course, index) => {
				return {
					...course,
					courseFor: additionalData[index].courseFor,
					courseImage: additionalData[index].courseImage,
					list: additionalData[index].list,
				};
			});

			return {
				enrolledCourses: userCourses,
				assessment: data?.assessment ? data?.assessment : [],
				firstLogin: data?.first_login ? data?.first_login  : []
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

	const { status, data, isFetching } = useQuery(
		['userEnrolledCourses', userInfo],
		() => fetchUserCourses(),
		{
			keepPreviousData: true,
			refetchOnWindowFocus: true,
		}
	);

	return { status, data, isFetching };
};

export const useModulesLoggedIn = (courseID) => {
	const userInfo = JSON.parse(sessionStorage.getItem('rpUser'));

	const params = {
		course_id: courseID,
		token: userInfo?.token,
	};

	const fetchUserModules = async () => {
		try {
			const { data } = await axios.post(`${Config.url.API_URL}/modules-loggedIn`, params);

			return {
				progress: data.progress,
				courseName: data.courseName,
				modules: data.modules,
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

	const { status, data, isFetching } = useQuery(
		['userModulesLoggedIn', userInfo, courseID],
		() => fetchUserModules(),
		{
			keepPreviousData: true,
			refetchOnWindowFocus: true,
		}
	);

	return { status, data, isFetching };
};
