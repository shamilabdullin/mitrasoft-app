import { PostAction, PostState } from "../../types/post"
import { GET_POSTS, SET_POSTS } from "../constants"
import { Post } from "../../types/post"

const initialState: PostState = {
	posts: []
}

export const postReducer = (state = initialState, action: PostAction): PostState => {
	switch (action.type) {
		case SET_POSTS:
			return {
				...state,
				posts: action.payload
			}

		default:
			return state
	}

}