import * as React from 'react'
import { Spinner, Table } from 'react-bootstrap'
import classes from './ViewUsers.module.css'
import common from '../../../commonStyles/common.module.css'
// import { useFetchAndSearchCompanyUsers } from '../../../DataQueries/companyHooks/fetch'
// import { useDeleteCompanyUser } from '../../../DataQueries/companyHooks/mutation'
// import DataStatusIndicator from '../../layout/AdminDataStatusNotes/DataStatusIndicator'
import { DeleteOutline, Edit } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import EditUserModal from '../../layout/UserModals/EditUserModal'
// import Swal from 'sweetalert2'
import MuiPagination from '../../layout/TablePagination/MuiPagination'
// import { currentDateTime } from '../../helpers/getCurrentTime'
// import RenderDownloadXLSXButton from '../../helpers/generateExcelFile'

const ViewUsers = () => {
    const userInfo = JSON.parse(localStorage.getItem('rpAdmin'))
    const [page, setPage] = React.useState(1)
    const [rowsPerPage, setRowsPerPage] = React.useState(100)
    const [searchValue, setSearchValue] = React.useState('')
    // const {
    //     status,
    //     data: companyUsers,
    //     isFetching,
    // } = useFetchAndSearchCompanyUsers(searchValue, page, rowsPerPage)
    // const { deleteCompanyUser } = useDeleteCompanyUser()
    const [editModal, setEditModal] = React.useState(false)
    const [selectedUser, setSelectedUser] = React.useState(null)

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    const onEditModal = (user) => {
        setSelectedUser(user)
        setEditModal(true)
    }

    const hideEditModal = () => {
        setEditModal(false)
        setSelectedUser({})
    }

    // const handleDeleteCompanyUser = (user) => {
    //     const params = {
    //         userID: user.userID,
    //         // userToken: user.usertoken,
    //     }

    //     Swal.fire({
    //         title: 'PLEASE CONFIRM!!!',
    //         text: `Are you sure you want to delete: ${user.employeeID} ?`,
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: 'var(--color-lightBlue)',
    //         cancelButtonColor: 'var(--color-secondary)',
    //         confirmButtonText: 'YES',
    //         cancelButtonText: 'NO',
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             // deleteCompanyUser(user.usertoken)
    //             deleteCompanyUser(params)
    //                 .then((res) => {
    //                     Swal.fire('Deleted!', 'User Deleted Successfully.', 'success')
    //                 })
    //                 .catch((err) => {
    //                     if (err.response && err.response.data) {
    //                         Swal.fire({
    //                             icon: 'error',
    //                             title: 'Oops...',
    //                             text: err.response.data.message,
    //                         })
    //                     }
    //                 })
    //         }
    //     })
    // }

    // Table header row and XLSX header row
    const header = [
        'Employee ID',
        'First Name',
        'Last Name',
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
                            Total Count:{' '} 3
                            {/* {status === 'loading' ? <Spinner /> : companyUsers?.users?.length} */}
                            {/* {status === 'loading' ? <Spinner /> : 3} */}

                        </h3>
                        <div className={common.TableInputs}>
                            <input
                                type='search'
                                placeholder='Search'
                                onChange={handleSearch}
                            />

                            {/* <RenderDownloadXLSXButton
                                list={companyUsers?.users}
                                header={header}
                                fileName={`Employees Details ${currentDateTime()}`}
                                loopRef='allCompanyEmployeeData'
                            /> */}
                        </div>
                    </div>
                    <Table className={common.Table} hover responsive>
                        <thead>
                            <tr>
                                <th>Actions</th>
                                <th>Employee ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                {/* <th>Role</th> */}
                                <th>Gender</th>
                                <th>Grade</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {status === 'success' &&
                                companyUsers?.users?.length >= 1 &&
                                companyUsers?.users?.map((employee) => (
                                    <tr key={employee.userEmail}>
                                        <td>
                                            <IconButton
                                                className={classes.ActionButton}
                                                onClick={() => handleDeleteCompanyUser(employee)}>
                                                <DeleteOutline
                                                    style={{ fontSize: '17px', color: 'brown' }}
                                                />
                                            </IconButton>
                                            <IconButton
                                                className={classes.ActionButton}
                                                onClick={() => onEditModal(employee)}>
                                                <Edit
                                                    style={{
                                                        fontSize: '17px',
                                                        color: 'var(--color-secondary)',
                                                    }}
                                                />
                                            </IconButton>
                                        </td>
                                        <td>{employee.employeeID}</td>
                                        <td>
                                            {employee.userFirstName} {employee.userLastname}
                                        </td>
                                        <td>{employee.userEmail}</td>
                                        <td>{employee.userGrade}</td>
                                        <td>{employee.userGender}</td>
                                        <td>{employee.location}</td>
                                    </tr>
                                ))} */}

                            <tr>
                                <td>
                                    <IconButton
                                        className={classes.ActionButton}
                                    // onClick={() => handleDeleteCompanyUser(employee)}
                                    >
                                        <DeleteOutline
                                            style={{ fontSize: '17px', color: 'brown' }}
                                        />
                                    </IconButton>
                                    <IconButton
                                        className={classes.ActionButton}
                                        onClick={() => onEditModal("employee")}
                                    >
                                        <Edit
                                            style={{
                                                fontSize: '17px',
                                                color: 'var(--color-primary)',
                                            }}
                                        />
                                    </IconButton>
                                </td>
                                <td>{"ADA1"}</td>
                                <td>
                                    {"Adedoyin"} {"Oyebanji"}
                                </td>
                                <td>{"company@email.com"}</td>
                                <td>{"Male"}</td>
                                <td>{"78"}</td>
                                <td>{"Lagos"}</td>

                            </tr>

                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    <IconButton
                                        className={classes.ActionButton}
                                    // onClick={() => handleDeleteCompanyUser(employee)}
                                    >
                                        <DeleteOutline
                                            style={{ fontSize: '17px', color: 'brown' }}
                                        />
                                    </IconButton>
                                    <IconButton
                                        className={classes.ActionButton}
                                        onClick={() => onEditModal("employee")}
                                    >
                                        <Edit
                                            style={{
                                                fontSize: '17px',
                                                color: 'var(--color-primary)',
                                            }}
                                        />
                                    </IconButton>
                                </td>
                                <td>{"4PF"}</td>
                                <td>
                                    {"Mark"} {"Zuckerberg"}
                                </td>
                                <td>{"MarkZuck@twitter.com"}</td>
                                <td>{"Male"}</td>
                                <td>{"11"}</td>
                                <td>{"Abuja"}</td>

                            </tr>

                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    <IconButton
                                        className={classes.ActionButton}
                                    // onClick={() => handleDeleteCompanyUser(employee)}
                                    >
                                        <DeleteOutline
                                            style={{ fontSize: '17px', color: 'brown' }}
                                        />
                                    </IconButton>
                                    <IconButton
                                        className={classes.ActionButton}
                                        onClick={() => onEditModal("employee")}
                                    >
                                        <Edit
                                            style={{
                                                fontSize: '17px',
                                                color: 'var(--color-primary)',
                                            }}
                                        />
                                    </IconButton>
                                </td>
                                <td>{"AAA"}</td>
                                <td>
                                    {"Hanzo"} {"Hasashi"}
                                </td>
                                <td>{"chorister@9ijakids.com"}</td>
                                <td>{"Female"}</td>
                                <td>{"23"}</td>
                                <td>{"Zambia"}</td>

                            </tr>

                        </tbody>
                    </Table>

                    {/* {companyUsers?.users.length >= 1 && (
						<MuiPagination
							page={page}
							setPage={setPage}
							rowsPerPage={rowsPerPage}
							setRowsPerPage={setRowsPerPage}
							count={companyUsers && companyUsers?.total}
						/>
					)} */}

                    <MuiPagination
                        page={page}
                        setPage={setPage}
                        rowsPerPage={rowsPerPage}
                        setRowsPerPage={setRowsPerPage}
                        count={5}
                    />
                </div>

                <p style={{ textAlign: 'center', marginTop: '10px' }}>
                    {/* {searchValue && isFetching && 'LOADING FILTERED DATA...'} */}
                </p>

                {/* <DataStatusIndicator
					status={status}
					dataNode1={companyUsers?.users}
					dataNode2={companyUsers}
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
