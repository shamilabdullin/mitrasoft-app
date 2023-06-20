import { PostAction, PostState } from "../../types/post"
import { GET_POSTS, SET_COMMENT, SET_POSTS, SET_POSTS_PAGE } from "../constants"

const initialState: PostState = {
	posts: [],
	postsPage: 1
}

export const postReducer = (state = initialState, action: PostAction): PostState => {
	switch (action.type) {
		case SET_POSTS:
			return {
				...state,
				posts: action.payload
			}

		case SET_POSTS_PAGE:
			return {
				...state,
				postsPage: action.payload
			}

		case SET_COMMENT:
			const posts = state.posts.map((post) => {
				if (post.id === action.payload.postId) {
					console.log(post.id)
					return {
						...post, 
						comments: action.payload.comments
					}
				}
				return post
			})
			return {
				...state,
				posts: posts
			}

		default:
			return state
	}

}