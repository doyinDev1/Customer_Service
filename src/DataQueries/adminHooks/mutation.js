import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { Config } from '../../Config';



//DELETE/REMOVE USER FROM COMPANY
export const useDeleteRoleplayUser = () => {
	const adminUser = JSON.parse(sessionStorage.getItem('rpAdmin'));
	const queryClient = useQueryClient();

	const removeRoleplayUser = async (params) => {
		await axios.delete(
			`${Config.url.API_URL}/delete-user` 
			, {
				token: adminUser.token,
                ...params
			}
		);
	};
	const { mutateAsync: deleteRoleplayUser } = useMutation(removeRoleplayUser, {
		onSuccess: () => queryClient.invalidateQueries('RoleplayUsers'),
	});
	return { deleteRoleplayUser };
};



//EdIT ROLEPLAY USER
export const useUpdateCompanyUser = () => {
	const adminUser = JSON.parse(sessionStorage.getItem('rpAdmin'));
	const queryClient = useQueryClient();

	const updateCompanyUser = async (params) => {
		await axios.put(`${Config.url.API_URL}/edit-user`, {
			...params,
			token: adminUser.token,
		});
	};
	const { mutateAsync: editCompanyUser, status: editCompanyUserStatus } = useMutation(
		updateCompanyUser,
		{
			onSuccess: () => queryClient.invalidateQueries('RoleplayUsers'),
		}
	);
	return { editCompanyUserStatus, editCompanyUser };
};