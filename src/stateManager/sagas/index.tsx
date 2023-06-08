import { all, call, put, takeEvery } from 'redux-saga/effects'
import { getComments, getPosts, getUser } from '../../api/index'
import { GET_COMMENTS, GET_POSTS, GET_USER, SET_POSTS_PAGE } from '../constants'
import { setPosts, actionGetComments, setPostsPage, setComments } from '../actions/actionCreator'
import { Post, SetCommentsAction } from '../../types/post'
import { Action } from 'redux'

export function* handlePosts(): Generator {
	const posts = yield getPosts()
	//@ts-ignore
	yield put(setPosts(posts))
} 

// export function* handleUser(): Generator {
// 	const user = yield getUser('1')
// }

interface GetCommentsAction {
	type: string;
	payload: number;
}

export function* handleComments(action: GetCommentsAction): Generator {  //Test
	const comments = yield call(getComments, action.payload.toString())
	//@ts-ignore
	yield put(setComments(comments, action.payload))
}

export function* watchPostsSaga() {
	yield takeEvery(GET_POSTS, handlePosts)
	yield takeEvery(SET_POSTS_PAGE, handlePosts)
}

export function* watchCommentsSaga() {
	yield takeEvery(GET_COMMENTS, handleComments)
}

export function* watchUserSaga() {
	// yield takeEvery(GET_USER, handleUser)
}

export default function* rootSaga() {

	yield all([watchPostsSaga(), watchUserSaga(), watchCommentsSaga()])
}