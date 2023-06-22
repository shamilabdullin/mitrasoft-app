import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { setPosts, setPostsPage } from '../stateManager/actions/actionCreator'
import { GET_POSTS } from '../stateManager/constants'
import { Dispatch } from 'redux'
import styles from './Posts.module.sass'
import { PostsList } from '../components/PostsList'
import Spinner from 'react-bootstrap/Spinner'
import { SortingButton } from '../components/SortingButton'
import { SearchTextField } from '../components/SearchTextField'
import { MyPagination } from '../components/MyPagination'

export const Posts: React.FC = () => {

	const [isSortedByTitle, setIsSortedByTitle] = useState(true)
	const [searchTitle, setSearchTitle] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const { post } = useTypedSelector (store => store)
	const dispatch = useDispatch<Dispatch>()
	const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	useEffect(() => {
		if (post.posts.length < 1) {
			setIsLoading(true)
			setTimeout(() => {
				dispatch({ type: GET_POSTS })
			}, 1000)
		}
	}, [searchTitle])

	useEffect(() => {
		if (post.posts.length > 0)
			setIsLoading(false)
	}, [post.posts])

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
		{isLoading ?
			<Spinner animation="grow" className={styles.spinner}/> 
			:
			<div>
				<div className={styles.title}>
					<h1>Posts</h1>
				</div>

				<div className={styles.instruments}>
					<SortingButton sort={sort} isSortedByTitle={isSortedByTitle} />
					<SearchTextField setSearchTitle={setSearchTitle} />
				</div>

				<div className={styles.posts}>
					{searchTitle ? 
						<PostsList posts={post.posts.filter((post) => post.title.includes(searchTitle)).slice(post.postsPage * 10 - 10, post.postsPage * 10)} /> 
						:
						<PostsList posts={post.posts.slice(post.postsPage * 10 - 10, post.postsPage * 10)} />
					}
				</div>

				<MyPagination pages={pages} post={post} handlePagination={handlePagination} />
			</div>
		}
	</div>
  )
}