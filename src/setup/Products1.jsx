import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Products1.css';
//import { useNavigate } from 'react-router';
//let navigate = useNavigate();
/* useNavigate instead of useHistory */

const initialState = {
	code: '',
	name: '',
	addby: '',
	dtadd: ''
};

export const Products1 = () => {
	const [ state, setState ] = useState(initialState);
	const { code, name, addby, dtadd } = state;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!code) {
			alert('Please Enter Product Code ');
		} else {
			axios
				.post('http://localhost:5000/api/post_p1', {
					code,
					name,
					addby,
					dtadd
				})
				.then(() => {
					setState({ code: '', name: '', addby: '', dtadd: '' });
				})
				.catch((err) => toast.error('error '));
			setTimeout(() => {
				//navigate('/');
			}, 500);
		}
	};

	const handleInputcahnge1 = (e) => {
		//const { name, value } = e.target;
		const { name, value } = e.target.value.replace(/\D/g, '');
		setState({ ...state, [name]: value });
	};
	const handleInputcahnge = (e) => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};
	const myFunction = () => {};
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
				<h2 className="add-edit-header">Products (Main)</h2>
				<label htmlFor="code" className="lable-class">
					Code
				</label>
				<input
					type="text"
					id="code"
					name="code"
					placeholder="Product Code ..."
					maxLength={2}
					pattern="[0-9]*"
					value={code}
					onKeyPress={(event) => {
						if (!/[0-9]/.test(event.key)) {
							event.preventDefault();
						}
					}}
					onChange={handleInputcahnge}
					onBlur={myFunction}
				/>
				<label htmlFor="name" className="lable-class">
					Description
				</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Product Description...."
					value={name}
					maxLength={50}
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
export default Products1;
