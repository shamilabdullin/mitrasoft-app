import { GetUserResponse } from "../../api";
import { Comment } from "../../types/comments";
import { Post } from "../../types/post";
import { User } from "../../types/user";
import { GET_COMMENTS, GET_POSTS, GET_USER, SET_COMMENTS, SET_POSTS, SET_POSTS_PAGE, SET_USER } from "../constants";

type GetPostResponse = {
	data: Post[]
}

export const setPosts = (payload: Promise <GetPostResponse>) => ({
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

export const actionGetComments = (commentId: number) => ({
	type: GET_COMMENTS,
	payload: commentId
})

export const setComments = (comments: Comment[]) => ({
	type: SET_COMMENTS,
	payload: comments
})