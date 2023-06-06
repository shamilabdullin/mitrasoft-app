import { CommentAction, CommentState } from "../../types/comments"
import { SET_COMMENTS } from "../constants"

const initialState: CommentState = {
	comments: []
}

export const commentsReducer = (state = initialState, action: CommentAction): CommentState => {

	switch(action.type) {
		case SET_COMMENTS :
			return {
				...state,
				comments: action.payload
			}
		default: 
			return state
	}
}