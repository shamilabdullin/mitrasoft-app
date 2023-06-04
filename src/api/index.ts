import axios from "axios"
import { Post } from "../types/post"
import { User } from "../types/user"

export async function getPosts() {
	const { data } = await axios.get<GetPostResponse>('https://jsonplaceholder.typicode.com/posts')

	return await data
}

export async function getUser(id: string) {
	const { data } = await axios.get<GetUserResponse>(`https://jsonplaceholder.typicode.com/users/${id}`)

	return await data 
}

type GetPostResponse = {
	data: Post[];
}

type GetUserResponse = {
	data: User;
}