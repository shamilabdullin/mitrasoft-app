export type Comment = {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

export interface CommentState {
	comments: Comment[],
}

interface SetCommentsAction {
	type: "SET_COMMENTS",
	payload: Comment[]
}

export interface GetCommentsAction {
	type: string;
	payload: number;
}

export type CommentAction = SetCommentsAction
