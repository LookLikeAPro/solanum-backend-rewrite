import types from "constants/ActionTypes";

const initialState = {
	nearby: [],
	byLink: {}
};

export default function vendors(state = initialState, action) {
	switch (action.type) {
	case types.VENDOR.BYLINK.PAYLOAD:
		return Object.assign(state, {
			byLink: {
				[action.link]: action.data,
				...state.byLink
			}
		});
	case types.VENDOR.NEARBY.PAYLOAD:
		return Object.assign(state, {
			nearby: action.data
		});
	default:
		return state;
	}
}
