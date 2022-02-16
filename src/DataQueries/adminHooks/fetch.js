import axios from 'axios';
import { useQuery } from 'react-query';
import { Config } from '../../Config';

// fetch filters for searches
export const useFecthFilters = () => {
	const adminUser = JSON.parse(sessionStorage.getItem('rpAdmin'));
	const fecthFilters = async () => {
		try {
			const { data } = await axios.post(`${Config.url.API_URL}/filters`, {
				token: adminUser.token,
			});

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

// fetch candidate summary
export const useFetchCandidateSummary = (userID) => {
	const adminUser = JSON.parse(sessionStorage.getItem('rpAdmin'));
	const fetchSummary = async () => {
		try {
			const { data } = await axios.post(`${Config.url.API_URL}/candidate-table`, {
				token: adminUser.token,
				user_id: userID,
			});

			return {
				candidateDetails: data.candidateDetails,
				candidateSummary: data.candidateSummary,
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
		['fetchUserSummary', adminUser, userID],
		() => fetchSummary(),
		{
			keepPreviousData: true,
			refetchOnWindowFocus: true,
		}
	);

	return { status, data, isFetching };
};

// fetch searched users
export const useFetchSearchedCandidates = (searchInput) => {
	const adminUser = JSON.parse(sessionStorage.getItem('rpAdmin'));
	const fetchSearchResults = async () => {
		try {
			const { data } = await axios.get(
				`${Config.url.API_URL}/search-candidate?token=${adminUser.token}&searchRequest=${searchInput}`
			);

			return data.search;
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
		['fetchSearchCandidates', adminUser, searchInput],
		() => fetchSearchResults(),
		{
			keepPreviousData: true,
			refetchOnWindowFocus: true,
		}
	);

	return { status, data, isFetching };
};

//FETCH SPECIFIC/SINGLE COURSE REPORT/RECORD
export const useFetchSingleCourseReport = (
	courseID,
	userGender,
	location,
	userGrade,
	page_number
) => {
	const adminUser = JSON.parse(sessionStorage.getItem('rpAdmin'));
	const params = {
		token: adminUser.token,
		course_id: courseID,
		gender: userGender,
		location: location,
		grade: userGrade,
	};
	const fetchSingleCourseReport = async () => {
		try {
			const { data } = await axios.post(`${Config.url.API_URL}/course-view`, params);
			return {
				totalUsers: data.totalUsers,
				courseDetails: data.courseDetails,
				courseEngagementChart: data.courseEngagementChart,
				courseTableDetails: data.courseTableDetails,
				courseAssessment: data.courseAssessment,
				defaultCourseName: data.courseName,
				defaultCourseID: data.courseID,
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
		['singleCourseReport', adminUser, courseID, userGender, location, userGrade, page_number],
		() => fetchSingleCourseReport(),
		{
			keepPreviousData: true,
			refetchOnWindowFocus: true,
		}
	);
	return { status, data, isFetching };
};

// FETCH COMPANY COURSE REPORTS
export const useFetchCoursesReports = (userGender, location, userGrade) => {
	const adminUser = JSON.parse(sessionStorage.getItem('rpAdmin'));

	const params = {
		token: adminUser.token,
		gender: 'Male',
		location: location,
		grade: userGrade,
	};

	const fetchCoursesReports = async () => {
		try {
			const { data } = await axios.post(`${Config.url.API_URL}/all-courses`, params);
			return data.message;
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
		['coursesReports', adminUser, userGender, location, userGrade],
		() => fetchCoursesReports(),
		{
			keepPreviousData: true,
			refetchOnWindowFocus: true,
		}
	);
	return { status, data, isFetching };
};
