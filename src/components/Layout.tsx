import React from 'react'
import { Link, Outlet } from "react-router-dom"
import styles from './Layout.module.sass'
import { NavbarComponent } from './NavbarComponent'

export const Layout = () => {
	return (
		<>
			<header className={styles.header}>
				<NavbarComponent />
			</header>
			<main className={styles.container}>
				<Outlet />
			</main>
		</>
	)
}
