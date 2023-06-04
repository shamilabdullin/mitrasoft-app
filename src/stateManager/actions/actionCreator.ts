import { Post } from "../../types/post";
import { GET_POSTS, GET_USER, SET_POSTS } from "../constants";

type GetPostResponse = {
	data: Post[]
}

export const setPosts = (payload: Promise<GetPostResponse>) => ({
	type: SET_POSTS,
	payload
})

export const getPosts = () => ({
	type: GET_POSTS
})

export const setUser = () => {

}

export const getUser = (payload: string) => ({
	type: GET_USER,
	payload
})