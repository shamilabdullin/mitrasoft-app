import React, { useEffect, useState } from 'react'
import styles from './User.module.sass'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { getUser } from '../api'
import { setUser } from '../stateManager/actions/actionCreator'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Card from 'react-bootstrap/Card'
import Avatar from '../../public/avatar.svg'
import { PostsList } from '../components/PostsList'
// import { getUser } from '../stateManager/actions/actionCreator'

export const User: React.FC = () => {

	const { id } = useParams()
	const dispatch = useDispatch<Dispatch>()
	const { user } = useTypedSelector(store => store.user)
	const { posts } = useTypedSelector(store => store.post)
	
	const userPosts = posts.filter((post) => post.userId.toString() === id)

	useEffect(() => {
		if (typeof id === 'string') {
			getUser(id)
				.then(user => dispatch(setUser(user)))
				.then(user => console.log(user))
		}
	}, [])

  return (
	<div className={styles.container}>
		<Link to={'/'}><div className={styles.backLink}>Back to posts</div></Link>
		<div className={styles.title}>
			<h1>{user.username}</h1>
		</div>
		<div className={styles.card}>
			<Card style={{'width' : '50%', 'margin': '0 auto'}}>
				<Card.Body style={{'margin' : '0 auto'}}>
					<div className={styles.userInfo}>
						<p><strong>Id:</strong> {user.id}</p>
						<p><strong>Name:</strong> {user.name}</p>
						<p><strong>Email:</strong> {user.email}</p>
						<p><strong>Phone:</strong> {user.phone}</p>
						<p><strong>Website:</strong> {user.website}</p>
						<p><strong>Address:</strong> {user.address.suite.slice(5)} {user.address.street}, {user.address.city}</p>
						<p><strong>Company:</strong> {user.company.name}</p>
					</div>
				</Card.Body>
			</Card>
		</div>
		<div className={styles.user_posts}>
			<PostsList posts={userPosts} />
		</div>
	</div>
  )
}
