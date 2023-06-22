import { User, UserAction, UserState } from "../../types/user"
import { SET_USER } from "../constants"

const initialUser: User = {
	id: 0,
	name: '',
	username: '',
	email: '',
	address: {
		city: '',
		geo: {
			lat: '',
			lng: ''
		},
		street: '',
		suite: '',
		zipcode: ''
	},
	phone: '',
	website: '',
	company: {
		bs: '',
		catchPhrase: '',
		name: ''
	},
}

const initialState = {
	user: initialUser
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
	switch (action.type) {
		case SET_USER:
			return {
				...state, 
				user: action.payload
			}

		default: 
			return state
	}
}