import { all, call, put, takeEvery } from 'redux-saga/effects'
import { getPosts, getUser } from '../../api/index'
import { GET_POSTS, GET_USER } from '../constants'
import { setPosts } from '../actions/actionCreator'
import { Post } from '../../types/post'

export function* handlePosts(): Generator {
	const posts = yield getPosts()
	//@ts-ignore
	yield put(setPosts(posts))
} 

export function* handleUser(): Generator {
	const user = yield getUser('1')
}

export function* watchPostsSaga() {
	yield takeEvery(GET_POSTS, handlePosts)
}

export function* watchUserSaga() {
	yield takeEvery(GET_USER, handleUser)
}

export default function* rootSaga() {

	yield all([watchPostsSaga(), watchUserSaga()])
}