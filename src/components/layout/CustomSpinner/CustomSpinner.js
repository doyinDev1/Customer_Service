import React from 'react';
import classes from './CustomSpinner.module.css';

const CustomSpinner = () => {
	return (
		<div className={classes.spinner}>
			<div className={classes.cube1}></div>
			<div className={classes.cube2}></div>
		</div>
	);
};

export default CustomSpinner;
