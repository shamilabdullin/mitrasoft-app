import { PostState } from '../../types/post';
import { postReducer } from './posts';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
	post: postReducer
})

export type RootState = ReturnType<typeof rootReducer>