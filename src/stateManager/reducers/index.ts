import { postReducer } from './posts';
import { combineReducers } from "redux";
import { userReducer } from './user';
//import { commentsReducer } from './comments';

export const rootReducer = combineReducers({
	post: postReducer,
	user: userReducer,
	// comment: commentsReducer,
})

export type RootState = ReturnType<typeof rootReducer>