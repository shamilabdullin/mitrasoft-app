import React from 'react'
import styles from './NotFound.module.sass'

export const NotFound: React.FC = () => {
  return (
	<div className={styles.container}>
		<div className={styles.title}>
			<h1>404 Not Found</h1>
		</div>
	</div>
  )
}
