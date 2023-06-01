import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PostAction, PostState } from '../types/post'
import { RootState } from '../stateManager/reducers'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { getPosts } from '../api'
import { Post } from '../types/post'
import { setPosts } from '../stateManager/actions/actionCreator'
import { SET_POSTS } from '../stateManager/constants'
import { Dispatch } from 'redux'
import styles from './Posts.module.sass'
import { Link } from 'react-router-dom'
import Pagination from 'react-bootstrap/Pagination';

export const Posts: React.FC = () => {

	const { posts } = useTypedSelector (store => store.post)
	const dispatch = useDispatch<Dispatch<PostAction>>()
	const [page, setPage] = useState(3)
	const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	useEffect(() => {
		getPosts()
			.then(res => res.slice(page * 10 - 10, page * 10 - 1))
			.then((res) => dispatch({ type: SET_POSTS, payload:res  }))
	}, [page])

  return (
	<div className={styles.container}>
		<div className={styles.title}>
			<h1>Posts</h1>
		</div>
		<div className={styles.posts}>
			{posts.map(post => (
				<div className={styles.post}>
					<div className={styles.post_content}>
						<div className={styles.post_title}><h4>{post.title}</h4></div>
						<div className={styles.post_body}><p>{post.body}</p></div>
					</div>
					<div className={styles.post_avatar}>
						<Link to={'/user'}>
							<img src='avatar.svg' alt='avatar' width={100}/>
						</Link>
					</div>
				</div>
			))}
		</div>
		<Pagination className={styles.pagination}>
			{pages.map((page) => (
				<Pagination.Item onClick={() => setPage(page)}>
					{page}
				</Pagination.Item>
			))}
		</Pagination>
	</div>
  )
}
