export type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface PostState {
	posts: Post[]
}

export interface PostAction {
	type: "SET_POSTS" | "GET_POSTS";
	payload: []
}