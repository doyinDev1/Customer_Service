import * as React from 'react'
import { useEffect , useState } from 'react'
import { Spinner, Table } from 'react-bootstrap'
import classes from './ViewUsers.module.css'
import common from '../../../commonStyles/common.module.css'
import { useFetchAllUsers } from '../../../DataQueries/adminHooks/fetch'
import { useFetchAndSearchRoleplayUsers } from '../../../DataQueries/adminHooks/fetch'

import { useDeleteRoleplayUser } from '../../../DataQueries/adminHooks/mutation'
// import DataStatusIndicator from '../../layout/AdminDataStatusNotes/DataStatusIndicator'
import { DeleteOutline, Edit } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import EditUserModal from '../../layout/UserModals/EditUserModal'
import Swal from 'sweetalert2'
import MuiPagination from '../../layout/TablePagination/MuiPagination'
import { currentDateTime } from '../../helpers/getCurrentTime'
import RenderDownloadXLSXButton from '../../helpers/generateExcelFile'

const ViewUsers = () => {
    // const [page, setPage] = React.useState(1)
    // const [rowsPerPage, setRowsPerPage] = React.useState(100)
    const [searchRequest, setSearchRequest] = useState('')
    const { status: allUserStatus, data: allUserData, isFetching: isFetchingAllUsers } = useFetchAllUsers()
    const {
        status: searchedStatus,
        data: searchedUsers,
        isFetching: fetchingSearch,
    } = useFetchAndSearchRoleplayUsers(searchRequest)
    const { deleteRoleplayUser } = useDeleteRoleplayUser();
    const [editModal, setEditModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)

    const handleSearch = (e) => {
        setSearchRequest(e.target.value)
        // setAllUserStatuse({})
    }
   

    const onEditModal = (user) => {
        setSelectedUser(user)
        setEditModal(true)
    }

    const hideEditModal = () => {
        setEditModal(false)
        setSelectedUser({})
    }

    const handleDeleteRoleplayUser = (user) => {

        const params = {
            employee_id: user.employee_id,
            name: user.name,
            grade: user.grade,
            gender: user.gender,
            location: user.location,
            division: user.division,
            email: user.email,
        }

        Swal.fire({
            title: 'PLEASE CONFIRM!!!',
            text: `Are you sure you want to delete: ${user.name} ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'var(--color-green)',
            cancelButtonColor: 'var(--color-primary)',
            confirmButtonText: 'YES',
            cancelButtonText: 'NO',
        }).then((result) => {
            if (result.isConfirmed) {
                // deleteRoleplayUser(user.usertoken)
                deleteRoleplayUser(params)
                    .then((res) => {
                        Swal.fire('Deleted!', 'User Deleted Successfully.', 'success')
                    })
                    .catch((err) => {
                        if (err.response && err.response.data) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: err.response.data.message,
                            })
                        }
                    })
            }
        })
    }

    // Table header row and XLSX header row
    const header = [
        'Employee ID',
        'Name',
        'Email',
        'Gender',
        'Grade',
        'Location',
    ]

    return (
        <>
            <h3 className={common.SectionTitle}>
                All Users
            </h3>
            <section className={common.SectionContainer}>
                <div className={common.TableWrapper} style={{ margin: '0 10px' }}>
                    <div className={common.TableExtras}>
                        <h3>
                            Total Count:{' '}
                            {allUserStatus === 'loading' ? <Spinner /> : allUserData?.length}

                        </h3>
                        <div className={common.TableInputs}>
                            <input
                                type='search'
                                placeholder='Search'
                                onChange={handleSearch}
                            />

                            <RenderDownloadXLSXButton
                                list={allUserData}
                                header={header}
                                fileName={`Employees Details ${currentDateTime()}`}
                                loopRef='allCompanyEmployeeData'
                            />
                        </div>
                    </div>
                    <Table className={common.Table} hover responsive>
                        <thead>
                            <tr>
                                <th>Actions</th>
                                <th>Employee ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Grade</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUserStatus === 'success' &&
                                allUserData?.length >= 1 &&
                                allUserData?.map((allRoleplayData) => (
                                    <tr key={allRoleplayData?.user_id}>
                                        <td>
                                            <IconButton
                                                className={classes.ActionButton}
                                                onClick={() => handleDeleteRoleplayUser(allRoleplayData)}
                                            >
                                                <DeleteOutline
                                                    style={{ fontSize: '17px', color: 'brown' }}
                                                />
                                            </IconButton>
                                            <IconButton
                                                className={classes.ActionButton}
                                                onClick={() => onEditModal(allRoleplayData)}
                                            >
                                                <Edit
                                                    style={{
                                                        fontSize: '17px',
                                                        color: 'var(--color-primary)',
                                                    }}
                                                />
                                            </IconButton>
                                        </td>
                                        <td>{allRoleplayData?.employee_id}</td>
                                        <td>
                                            {allRoleplayData?.name}
                                        </td>
                                        <td>{allRoleplayData?.email}</td>
                                        <td>{allRoleplayData?.gender}</td>
                                        <td>{allRoleplayData?.grade}</td>
                                        <td>{allRoleplayData?.location}</td>
                                    </tr>
                                ))}

                            {searchedStatus === 'success' &&
                                searchedUsers?.search.length >= 1 &&
                                searchedUsers?.search.map((allRoleplayData) => (
                                    <tr key={allRoleplayData?.user_id}>
                                        <td>
                                            <IconButton
                                                className={classes.ActionButton}
                                                onClick={() => handleDeleteRoleplayUser(allRoleplayData)}
                                            >
                                                <DeleteOutline
                                                    style={{ fontSize: '17px', color: 'brown' }}
                                                />
                                            </IconButton>
                                            <IconButton
                                                className={classes.ActionButton}
                                                onClick={() => onEditModal(allRoleplayData)}
                                            >
                                                <Edit
                                                    style={{
                                                        fontSize: '17px',
                                                        color: 'var(--color-primary)',
                                                    }}
                                                />
                                            </IconButton>
                                        </td>
                                        <td>{allRoleplayData?.employee_id}</td>
                                        <td>
                                            {allRoleplayData?.name}
                                        </td>
                                        <td>{allRoleplayData?.email}</td>
                                        <td>{allRoleplayData?.gender}</td>
                                        <td>{allRoleplayData?.grade}</td>
                                        <td>{allRoleplayData?.location}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>

                    {/* {allUserData?.length >= 1 && (
						<MuiPagination
							page={page}
							setPage={setPage}
							rowsPerPage={rowsPerPage}
							setRowsPerPage={setRowsPerPage}
							count={allUserData && allUserData?.length}
						/>
					)}                     */}
                </div>

                <p style={{ textAlign: 'center', marginTop: '10px' }}>
                    {/* {searchRequest && isFetching && 'LOADING FILTERED DATA...'} */}
                </p>

                {/* <DataStatusIndicator
					status={status}
					dataNode1={searchedUsers?.users}
					dataNode2={searchedUsers}
				/> */}
            </section>

            <EditUserModal
                editModal={editModal}
                selectedUser={selectedUser}
                hideEditModal={hideEditModal}
            />
        </>
    )
}

export default ViewUsers
