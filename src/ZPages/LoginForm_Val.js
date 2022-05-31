const LoginForm_Val = (values) => {
	let errors = {};
	if (!values.name) {
		errors.name = 'Name Required';
	} else if (!values.password) {
		errors.password = 'Password Required';
	}
	return errors;
};

export default LoginForm_Val;
