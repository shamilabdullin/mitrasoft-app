import React from 'react'
import styles from './AboutMe.module.sass'
import Image from 'react-bootstrap/Image'
import MyImage from '../public/me.jpg'

export const AboutMe: React.FC = () => {
  return (
	<div className={styles.container}>
		<div className={styles.title}>
			<h1>About Me</h1>
			<div className={styles.body}>
				<div className={styles.image}>
					<Image src={MyImage} alt='my_photo' width={300} />
				</div>
				<h4>Hello! My name is Abdullin Shamil and this site is my project.</h4>
				<h5>I use database from <a href='https://jsonplaceholder.typicode.com/'>JSONPlaceholder</a> and Redux, Redux-Saga libraries.</h5>
			</div>
		</div>
	</div>
  )
}
