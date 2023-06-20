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
import Pagination from 'react-bootstrap/Pagination'
import { PostsList } from '../components/PostsList'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const Posts: React.FC = () => {

	const { post } = useTypedSelector (store => store)
	const dispatch = useDispatch<Dispatch>()
	const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const [isSortedByTitle, setIsSortedByTitle] = useState(true)
	const [searchTitle, setSearchTitle] = useState('')
	const [isSearchTitle, setIsSearchTitle] = useState(false)

	useEffect(() => {
		if (post.posts.length < 1) {
			dispatch({ type: GET_POSTS })
		}
		if (searchTitle.length > 0) {

		}
	}, [searchTitle])

	const handlePagination = (page: number) => {
		dispatch(setPostsPage(page))
	}

	const sort = () => {
		setIsSortedByTitle(prev => !prev)
		const posts = post.posts
		if (isSortedByTitle) {
			const newPosts = [...posts].sort((a, b) => a.title > b.title ? 1 : -1)
			dispatch(setPosts(newPosts))
		}
		else {
			const newPosts = [...posts].sort((a, b) => a.id > b.id ? 1 : -1)
			dispatch(setPosts(newPosts))
		}
	}

  return (
	<div className={styles.container}>
		<div className={styles.title}>
			<h1>Posts</h1>
		</div>
		<div className={styles.instruments}>
			<Dropdown>
				<Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
					Sorting
				</Dropdown.Toggle>
			<Dropdown.Menu variant="dark">
					<Dropdown.Item onClick={() => sort()} active={isSortedByTitle}>
						Sort in order
					</Dropdown.Item>
					<Dropdown.Item onClick={() => sort()} active={!isSortedByTitle}>
						Sort by title
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>

			<Form className="d-flex">
				<Form.Control
					type="search"
					placeholder="Title"
					className="me-2"
					aria-label="Search"
					onChange={(e) => setSearchTitle(e.currentTarget.value)}
				/>
          </Form>
		</div>
		<div className={styles.posts}>
			{searchTitle ? 
				<PostsList posts={post.posts.filter((post) => post.title.includes(searchTitle)).slice(post.postsPage * 10 - 10, post.postsPage * 10)} /> :
				<PostsList posts={post.posts.slice(post.postsPage * 10 - 10, post.postsPage * 10)} />
			}
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