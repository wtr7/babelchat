// handle errors
handleError = function handleError(err, res) {
	var message = (err && err.message) ? err : {message: 'Internal Server Error', status: 'internalServerError', code: 500};

	res.status(message.code).json({
		error: message
	});
}