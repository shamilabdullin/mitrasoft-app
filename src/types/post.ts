export type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface PostState {
	posts: Post[],
	postsPage: number
}

interface SetPostsAction {
	type: "SET_POSTS";
	payload: Post[];
}
interface SetPostsPageAction {
	type: "SET_POSTS_PAGE";
	payload: number
}

export type PostAction =
	SetPostsAction | 
	SetPostsPageAction
