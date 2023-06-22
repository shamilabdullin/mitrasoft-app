import React from 'react'
import styles from './AboutMe.module.sass'
import Image from 'react-bootstrap/Image'
import MyImage from '../public/me.jpg'
import { Link } from 'react-router-dom'

export const AboutMe: React.FC = () => {
  return (
	<div className={styles.container}>
		<Link to={'/'}><div className={styles.backLink}>Back to posts</div></Link>
		<div className={styles.title}>
			<h1>About Me</h1>
			<div className={styles.body}>
				<div className={styles.image}>
					<Image src={MyImage} alt='my_photo' width={300} />
				</div>
				<h4 style={{'margin' : '3rem'}}>Hello! My name is Abdullin Shamil and this site is my project.</h4>
				<div>
					<h5>I create it just for studying new technologies.</h5>
					<h5>I use database from <a href='https://jsonplaceholder.typicode.com/'>JSONPlaceholder</a> and Redux, Redux-Saga libraries.</h5>
					<h6>My project's github link <a href="https://github.com/shamilabdullin/mitrasoft-app">Github link</a></h6>
				</div>
			</div>
		</div>
	</div>
  )
}
