import styles from './Navbar.module.sass'
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

export const NavbarComponent = () => {
  return (
	<Navbar bg='dark' expand='lg' className={styles.navbar}>
		<Nav className={styles.nav}>
			<Nav.Link>
				<Button variant='light'>
					<NavLink to="/">Posts</NavLink>
				</Button>
			</Nav.Link>
			<Nav.Link>
				<Button variant='light'>
					<NavLink to="/about">About me</NavLink>
				</Button>
			</Nav.Link>
		</Nav>
	</Navbar>

  )
}