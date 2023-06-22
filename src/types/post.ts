import { Comment } from "./comments";

export type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
	comments: Comment[];
}

export interface PostState {
	posts: Post[],
	postsPage: number
}

export type GetPostResponse = {
	data: Post[]
}

interface SetPostsAction {
	type: "SET_POSTS";
	payload: Post[];
}
interface SetPostsPageAction {
	type: "SET_POSTS_PAGE";
	payload: number
}

export interface SetCommentsAction {
	type: "SET_COMMENT",
	payload: {
		comments: Comment[],
		postId: number
	}
}

export type PostAction =
	SetPostsAction |
	SetPostsPageAction |
	SetCommentsAction
