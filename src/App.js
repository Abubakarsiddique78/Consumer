import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { AddEdit } from './pages/AddEdit';
import Signin from './pages/Signin';
import Products from './setup/Products';
import Products1 from './setup/Products1';
import Customer from './setup/Customer';
import Reports from './pages/Reports';
import SideBar from './components/Sidebar/SideBar';
import FinalFormCompnent from './setup/FinalFormCompnent';

function App() {
	return (
		<div className="App">
			<Router>
				<SideBar>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/reports" element={<Reports />} />
						<Route path="/setup/FinalFormCompnent" element={<FinalFormCompnent />} />
						<Route path="/setup/products_main" element={<Products1 />} />
						<Route path="/setup/customer" element={<Customer />} />
					</Routes>
				</SideBar>
			</Router>
		</div>
	);
}

export default App;
