export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		city: string;
		geo: {
			lat: string;
			lng: string;
		};
		street: string;
		suite: string;
		zipcode: string;
	};
	phone: string;
	website: string;
	company: {
		bs: string;
		catchPhrase: string;
		name: string;
	};
}

export interface UserAction {
	type: "GET_USER" | "SET_USER",
	payload: User,
}

export interface UserState {
	user: User;
}