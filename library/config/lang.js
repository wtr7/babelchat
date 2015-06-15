module.exports = {
	notAuthorized: {
		message: 'User not authorized.',
		status: 'notAuthorized',
		code: 401
	},
	badRequest: {
		message: 'Bad request.',
		status: 'badRequest',
		code: 400
	},
	notFound: {
		message: 'Page not found.',
		status: 'notFound',
		code: 204
	},
	incompleteData: {
		message: 'Incomplete Data',
		status: 'incompleteData',
		code: 400
	},
	invalidEmail: {
		message: 'The email address is invalid',
		status: 'invalidEmail',
		code: 400
	},
	emailInUse: {
		message: 'Email already exists',
		status: 'emailInUse',
		code: 400
	},
	noAccountFound: {
		message: 'No account found',
		status: 'noAccountFound',
		code: 204
	},
	noTicketFound: {
		message: 'No ticket found',
		status: 'noTicketFound',
		code: 204
	},
	noYearFound: {
		message: 'No year found',
		status: 'noYearFound',
		code: 204
	},
	noTeamFound: {
		message: 'No team found',
		status: 'noTeamFound',
		code: 204
	},
	noLeagueFound: {
		message: 'No league found',
		status: 'noLeagueFound',
		code: 204
	},
	invalidPass: {
		message: 'Your password is invalid',
		status: 'invalidPass',
		code: 400
	},
	invalidFacebookToken: {
		message: 'Your facebook token seems to be invalid',
		status: 'invalidFacebookToken',
		code: 400
	},
	teamDoesntExists: {
		message: 'The team you want to add doesn\'t exists',
		status: 'teamDoesntExists',
		code: 204
	},
	userDoesntExists: {
		message: 'The user you want to access doesn\'t exists',
		status: 'userDoesntExists',
		code: 204
	}
};