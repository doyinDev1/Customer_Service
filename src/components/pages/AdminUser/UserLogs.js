import { useState } from 'react';

const UserLogs = () => {
	// const [ tableType, setTableType ] = useState('Error')

	// const handleLogSwitches = (e) => {
	//     setTableType(e.target.id)
	// }

	return (
		<section>
			<div>
				<button id="All">All</button>
				<button id="Error">Errors</button>
			</div>
			<h3>User Logs Page</h3>
			{/* // {tableType === 'All' && <AllLogs />}
			// {tableType === 'Error' && <ErrorLogs />} */}
		</section>
	);
};

export default UserLogs;

// export const CandidatesContainer = styled.div`
//     margin: 15px;
//     border-top: none;
// `

// export const LogSwitches = styled.div`
//     margin: 20px 0;

//     > button {
//         padding: 3px 20px;
//         margin-right: 5px;
//         border-radius: 3px;
//         font-size: 13px;
//         border: 1px solid #777;
//         text-transform: capitalize;

//         :first-of-type {
//             :hover {
//                 background-color: #777;
//                 color: white;
//             }
//         }

//         :nth-of-type(2) {
//             border: 1px solid brown;
//             color: brown;

//             :hover {
//                 background-color: brown;
//                 color: white;
//             }
//         }
//     }
// `
