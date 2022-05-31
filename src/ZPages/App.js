import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import React, { useState } from 'react';

import { AddEdit } from './pages/AddEdit';
import Signin from './pages/Signin';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/addContact" element={<AddEdit />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
