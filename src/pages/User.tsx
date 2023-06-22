import React, { useEffect, useState } from 'react'
import styles from './User.module.sass'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { getUser } from '../api'
import { setUser } from '../stateManager/actions/actionCreator'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { PostsList } from '../components/PostsList'
import Spinner from 'react-bootstrap/Spinner'
import { UserCard } from '../components/UserCard'

export const User: React.FC = () => {

	const [isLoading, setIsLoading] = useState(false)
	const { id } = useParams()
	const dispatch = useDispatch<Dispatch>()
	const { user } = useTypedSelector(store => store.user)
	const { posts } = useTypedSelector(store => store.post)
	const userPosts = posts.filter((post) => post.userId.toString() === id)

	useEffect(() => {
		if (typeof id === 'string') {
			getUser(id)
				.then(user => {
					setIsLoading(true)
					setTimeout(() => {
						dispatch(setUser(user))
					}, 1000)
				})
		}
	}, [])

	useEffect(() => {
		if (user.email !== '' || user.id > 0)
			setIsLoading(false)
		setTimeout(() => {
			setIsLoading(false)
		}, 2000)
	}, [user.email, user.id])

	return (
		<div className={styles.container}>
			{isLoading ?
				<Spinner animation="grow" className={styles.spinner}/> 
				:
				<div>
					<Link to={'/'}><div className={styles.backLink}>Back to posts</div></Link>

					<div className={styles.title}>
						<h1>{user.username}</h1>
					</div>

					<UserCard user={user} />

					<div className={styles.user_posts}>
						<PostsList posts={userPosts} />
					</div>
				</div>
			}
		</div>
	)
}
