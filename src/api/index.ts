import axios from "axios"
import { Post } from "../types/post"
import { User } from "../types/user"

export async function getPosts(page = 1) {
	const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')

	return await data
}

export async function getUser(id: string) {
	const { data } = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)

	return await data 
}

export async function getComments(postId: string) {
	const { data } = await axios.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)

	return await data 
}