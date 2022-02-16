import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useFetchSearchedCandidates } from '../../../DataQueries/adminHooks/fetch';
import classes from './DropDown.module.css';

const SearchDropDown = ({ setUserID, setUserName }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [input, setInput] = useState('');

	const {
		status: searchedCandidatesStatus,
		data: searchedCandidates,
		isFetching,
	} = useFetchSearchedCandidates(input.trim());

	const handleSearch = (e) => {
		setInput(e.target.value);
		setIsOpen(true);
	};

	const handleSelect = (userID) => {
		setUserID(userID);
		setIsOpen(false);
	};

	return (
		<div className={classes.DropDownContainer}>
			<div>
				<input
					type="search"
					value={input}
					placeholder="Search for candidates by employee ID or Names"
					onChange={handleSearch}
				/>
			</div>

			<ul
				className={classes.DropDownMenu}
				style={{ display: input.length >= 1 && isOpen ? 'block' : 'none' }}
			>
				{searchedCandidatesStatus === 'success' && searchedCandidates?.length >= 1 ? (
					searchedCandidates?.map((link, index) => (
						<li key={index} onClick={() => handleSelect(link.user_id)}>
							{link.name}
						</li>
					))
				) : (
					<li style={{ backgroundColor: 'whitesmoke', color: '#888' }}>
						{isFetching ? (
							<span>
								<Spinner /> Finding matches
							</span>
						) : (
							'No matches found'
						)}
					</li>
				)}
			</ul>
		</div>
	);
};

export default SearchDropDown;
