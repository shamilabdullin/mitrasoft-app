import axios from "axios"

export const getPosts = async () => {
	const request = await axios.get('https://jsonplaceholder.typicode.com/posts')

	return await request.data
}