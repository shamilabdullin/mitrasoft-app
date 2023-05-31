import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import { AboutMe } from './pages/AboutMe';
import { NotFound } from './pages/NotFound';
import { Posts } from './pages/Posts';
import { User } from './pages/User';
import { Layout } from './components/Layout';
import './globals.sass'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Posts />} />
					<Route path='about' element={<AboutMe />} />
					<Route path='user' element={<User />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
