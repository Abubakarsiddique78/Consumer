import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Products.css';
//import { useNavigate } from 'react-router';
//let navigate = useNavigate();
/* useNavigate instead of useHistory */

const initialState = {
	name: '',
	email: '',
	contact: ''
};

export const Products = () => {
	const [ state, setState ] = useState(initialState);
	const { name, email, contact } = state;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email || !contact) {
			toast.error('Please enter Data');
		} else {
			axios
				.post('http://localhost:5000/api/post', {
					name,
					email,
					contact
				})
				.then(() => {
					setState({ name: '', email: '', contact: '' });
				})
				.catch((err) => toast.error('error '));
			setTimeout(() => {
				//navigate('/');
			}, 500);
		}
	};

	const handleInputcahnge = (e) => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};
	return (
		<div style={{ marginTop: '100px' }}>
			<form
				style={{
					margin: 'auto',
					padding: '15px',
					maxWidth: '400px',
					alignContent: 'center'
				}}
				onSubmit={handleSubmit}
			>
				<h2 className="add-edit-header">Add Edit </h2>
				<label htmlFor="name" className="lable-class">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Your Name ..."
					value={name}
					onChange={handleInputcahnge}
				/>
				<label htmlFor="email" className="lable-class">
					Email
				</label>
				<input
					type="text"
					id="email"
					name="email"
					placeholder="Your Password ..."
					value={email}
					onChange={handleInputcahnge}
				/>
				<label htmlFor="contact" className="lable-class">
					Contact
				</label>
				<input
					type="text"
					id="contact"
					name="contact"
					placeholder="Your contact number ..."
					value={contact}
					onChange={handleInputcahnge}
				/>
				<input type="submit" value="Save" />
				<Link to="/">
					<input type="button" value="Exit" />
				</Link>
			</form>
		</div>
	);
};
export default Products;
