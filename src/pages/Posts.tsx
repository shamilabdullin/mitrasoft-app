import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PostAction, PostState } from '../types/post'
import { RootState } from '../stateManager/reducers'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Post } from '../types/post'
import { getPosts, setPosts, setPostsPage } from '../stateManager/actions/actionCreator'
import { GET_POSTS, SET_POSTS } from '../stateManager/constants'
import { Dispatch } from 'redux'
import styles from './Posts.module.sass'
import { Link } from 'react-router-dom'
import Pagination from 'react-bootstrap/Pagination';
import { PostsList } from '../components/PostsList'

export const Posts: React.FC = () => {

	const { post } = useTypedSelector (store => store)
	const dispatch = useDispatch<Dispatch>()
	const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	useEffect(() => {
			dispatch({ type: GET_POSTS })

	}, [])

	const handlePagination = (page: number) => {
		dispatch(setPostsPage(page))
	}

  return (
	<div className={styles.container}>
		<div className={styles.title}>
			<h1>Posts</h1>
		</div>
		<div className={styles.posts}>
			<PostsList posts={post.posts.slice(post.postsPage * 10 - 10, post.postsPage * 10)} />
		</div>
		<Pagination className={styles.pagination}>
			{pages.map((page) => (
				<Pagination.Item key={page.toString()} active={page === post.postsPage} onClick={() => handlePagination(page)}>
					{page}
				</Pagination.Item>
			))}
		</Pagination>
	</div>
  )
}
