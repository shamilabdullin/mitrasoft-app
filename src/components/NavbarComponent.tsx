import styles from './Navbar.module.sass'
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image'

export const NavbarComponent = () => {
  return (
	<Navbar bg='dark' expand={false} className={styles.navbar}>
		<Nav className={styles.nav}>
		<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-true`} style={{backgroundColor: 'white'}} className={styles.burger}/>
		<Navbar.Offcanvas
			placement="start"
		>
			<Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-true`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>

			  <Offcanvas.Body>
				<div className={styles.about_me}>
					<div className={styles.about_me_item}><Image src='./me.jpg' alt='my_photo' width={150} rounded/></div>
					<div className={styles.about_me_item}><strong>Abdullin Shamil</strong></div>
					<div className={styles.about_me_item}>abdullin.shamil100@gmail.com</div>
				</div>
				<div className={styles.links}>
					<Nav.Link>
						<NavLink to="/">Posts</NavLink>
					</Nav.Link>
					<Nav.Link>
						<NavLink to="/about">About me</NavLink>
					</Nav.Link>
				</div>
			  </Offcanvas.Body>
		</Navbar.Offcanvas>

			{/* <Nav.Link>
				<Button variant='light'>
					<NavLink to="/">Posts</NavLink>
				</Button>
			</Nav.Link>
			<Nav.Link>
				<Button variant='light'>
					<NavLink to="/about">About me</NavLink>
				</Button>
			</Nav.Link> */}
		</Nav>
	</Navbar>

  )
}