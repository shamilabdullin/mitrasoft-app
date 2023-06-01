import React from 'react'
import styles from './User.module.sass'

export const User: React.FC = () => {
  return (
	<div className={styles.container}>
		<div className={styles.title}>
			<h1>User</h1>
		</div>
	</div>
  )
}
