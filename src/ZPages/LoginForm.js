import React, { useState, useEffect } from 'react';
import './LoginForm.css';
import { toast } from 'react-toastify';
import axios from 'axios';

import LoginForm_Val from './LoginForm_Val';
const LoginForm = () => {
	const [ state, setState ] = useState([]);
	const [ values, setValues ] = useState([]);
	const { username, password } = state;

	const [ errors, setErrors ] = useState({});

	const handleFormSubmit = (event) => {
		event.preventDefault();
		setErrors(LoginForm_Val(values));
		alert('Hello');
		if (!username || !password) {
			toast.error('Please enter Data');
		} else {
			axios
				.post('http://localhost:5000/api/login', {
					username: username,
					password: password
				})
				.then((response) => {
					console.log(response);
				});
		}
	};

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};

	return (
		<div className="container">
			<div className="app-wrapper">
				<div>
					<h2 className="title">Login Form</h2>
				</div>
				<form className="form-wrapper" onSubmit={handleFormSubmit}>
					<div className="name">
						<label className="lable">Name</label>
						<input
							className="input"
							type="text"
							name="username"
							value={values.username}
							onChange={handleChange}
						/>
						{errors.name && <p className="error">{errors.username}</p>}
					</div>
					<div className="password">
						<label className="lable">Password</label>
						<input
							className="input"
							type="password"
							name="password"
							value={values.password}
							onChange={handleChange}
						/>
						{errors.password && <p className="error">{errors.password}</p>}
					</div>
					<button className="submit">Login</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
