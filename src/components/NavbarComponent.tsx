import styles from './Navbar.module.sass'
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

export const NavbarComponent = () => {
  return (
	<Navbar bg='dark' expand='lg'>
		<Container>
			<Link to="/">Posts</Link>
			<Link to="/user">User</Link>
			<Link to="/about">About</Link>
		</Container>
	</Navbar>

  )
}