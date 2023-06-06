import { PostState } from '../../types/post';
import { postReducer } from './posts';
import { combineReducers } from "redux";
import { userReducer } from './user';

export const rootReducer = combineReducers({
	post: postReducer,
	user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>