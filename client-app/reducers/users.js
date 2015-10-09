import types from "../constants/ActionTypes";

const initialState = {
	currentUser: null
};

export default function users(state = initialState, action) {
	switch (action.type) {
	case types.USER.SET:
		return Object.assign(state, {currentUser: action.user});
	default:
		return state;
	}
}
