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
		<div className={styles.title}>
			<h1>{user.username}</h1>
		</div>
		<Card style={{'textAlign' : 'center'}}>
			<Card.Body>
				<Card.Title>
					{user.name}
				</Card.Title>
				<p><strong>Id:</strong> {user.id}</p>
				<p><strong>Email:</strong> {user.email}</p>
				<p><strong>Phone:</strong> {user.phone}</p>
				<p><strong>Website:</strong> {user.website}</p>
				<p><strong>Address:</strong> {user.address.city}, {user.address.street}</p>
				<p><strong>Company:</strong> {user.company.name}</p>
			</Card.Body>
		</Card>
		<div className={styles.user_posts}>
			<PostsList posts={userPosts} />
		</div>
	</div>
  )
}
