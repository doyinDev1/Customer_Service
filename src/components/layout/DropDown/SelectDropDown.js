import { useEffect, useState, useRef } from 'react';
import { ArrowDropUp, ArrowDropDown, ErrorOutline } from '@material-ui/icons';

import classes from './DropDown.module.css';

const SelectDropDown = ({
	legend,
	label,
	status,
	options,
	setFilterBy,
	getID,
	removeSpecificFilters,
}) => {
	const DropDownMenuRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (e) => {
		let selectedOption = e.target.textContent.trim();
		setFilterBy(selectedOption);

		// Shortcircuiting runs getID function only
		// for dropdowns for which the function is passed
		// in this case, only for the course and module dropdowns
		getID && getID(selectedOption);

		// Remove specific filter when 'None' is clicked or selected
		removeSpecificFilters && selectedOption === 'None' && removeSpecificFilters(label);

		setIsOpen(false);
	};

	const openDropDown = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = (e) => {
		if (DropDownMenuRef.current && !DropDownMenuRef.current.contains(e.target)) setIsOpen(false);
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, []);

	return (
		<div
			className={classes.DropDownContainer}
			ref={DropDownMenuRef}
			style={{
				pointerEvents: status !== undefined && 'none',
				borderColor: (isOpen || label) && '#777',
			}}
		>
			<div
				className={`${classes.DropDownTitle} ${status !== undefined && classes.DropDownDisabled}`}
				onClick={openDropDown}
			>
				<span style={{ color: status !== undefined && '#e9cdcd9c' }}>
					{status !== undefined ? <ErrorOutline /> : label ? label : legend}
				</span>
				{isOpen ? (
					<ArrowDropUp style={{ height: '20px' }} onClick={openDropDown} />
				) : (
					<ArrowDropDown style={{ height: '20px' }} onClick={openDropDown} />
				)}
				{label && <p>{legend}</p>}
			</div>
			<ul className={classes.DropDownMenu} style={{ display: isOpen ? 'block' : 'none' }}>
				{options?.length >= 1 ? (
					options &&
					options?.map((link, index) => (
						<li key={index} onClick={handleSelect}>
							{link}
							{/* {legend === 'groups'
								? link.groupName || link
								: legend === 'roles'
								? link.roleName || link
								: legend === 'grades'
								? link.userGrade || link
								: legend === 'locations'
								? link.location || link
								: link} */}
						</li>
					))
				) : (
					<li style={{ backgroundColor: 'whitesmoke', color: '#888' }}>No data</li>
				)}
			</ul>
		</div>
	);
};

export default SelectDropDown;
