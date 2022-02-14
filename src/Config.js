const prod = {
	url: {
		// API_URL: "https://nimdeewksht.sandbox.9ijakids.com/test-api.php",
		API_URL: 'https://customerservice.roleplaycareers.com/backendapi/RolePlay/public/api/v1',
	},
};
const dev = {
	url: {
		// https://afternoon-ridge-35420.herokuapp.com/https://customerservice.roleplaycareers.com/backendapi/RolePlay/api/v1/login
		// API_URL: "https://afternoon-ridge-35420.herokuapp.com/https://nimdeewksht.sandbox.9ijakids.com/test-api.php",
		API_URL:
			'https://afternoon-ridge-35420.herokuapp.com/https://customerservice.roleplaycareers.com/backendapi/RolePlay/public/api/v1',
	},
};

export const Config = process.env.NODE_ENV === 'development' ? dev : prod;
