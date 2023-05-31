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

export const Posts = () => {

	const { posts } = useTypedSelector (store => store.post)
	const dispatch = useDispatch<Dispatch<PostAction>>()

	useEffect(() => {
		getPosts()
			.then(res => dispatch({ type: SET_POSTS, payload:res  }))
	}, [])

  return (
	<div>
		{posts.map(post => (
			<div>{post.title}</div>
		))}
	</div>
  )
}
