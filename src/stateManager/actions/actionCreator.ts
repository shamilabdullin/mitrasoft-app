import { Comment } from './../../types/comments';
import { GetPostResponse, Post } from "../../types/post";
import { User } from "../../types/user";
import { GET_COMMENTS, GET_POSTS, GET_USER, SET_COMMENT, SET_POSTS, SET_POSTS_PAGE, SET_USER } from "../constants";

export const setPosts = (payload: Promise <GetPostResponse> | Post[]) => ({
	type: SET_POSTS,
	payload
})

export const getPosts = () => ({
	type: GET_POSTS
})

export const setPostsPage = (payload: number) => ({
	type: SET_POSTS_PAGE,
	payload
})

export const setUser = (payload: User) => ({
	type: SET_USER,
	payload
})

export const getUser = (payload: string) => ({
	type: GET_USER,
	payload
})

export const actionGetComments = (postId: number) => ({
	type: GET_COMMENTS,
	payload: postId
})

export const setComments = (comments: Comment[], postId: number) => ({
	type: SET_COMMENT,
	payload: {
		comments,
		postId
	}
})