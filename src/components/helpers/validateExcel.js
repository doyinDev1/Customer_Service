export const isValidEmail = (email) =>
	email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);

export const validateEmailArray = (arr) => {
	const errors = [];
	for (let i = 0; i < arr.length; i++) {
		// test each each email property
		if (!isValidEmail(arr[i]['Company Email Address'])) {
			errors.push({
				line: `Row number ${i + 2} `,
				error: 'Invalid Email',
			});
		}
	}

	return errors;
};

export const checkBlankField = (arr, field) => {
	const errors = [];

	for (let i = 0; i < arr.length; i++) {
		if (!arr[i][field]) {
			errors.push({
				line: `Row number ${i + 1} `,
				error: `${field} is blank`,
			});
		}
	}

	return errors;
};

// export const checkColumnFields = (arr) => {

// }
