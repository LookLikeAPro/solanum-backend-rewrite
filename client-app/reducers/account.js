import types from "constants/ActionTypes";

const initialState = {
	transactionHistory: []
};

export default function account(state = initialState, action = {}) {
	switch (action.type) {
	case types.ACCOUNT.TRANSACTIONHISTORY.PAYLOAD:
		// var offset = (action.page-1) * (action.itemsPerPage || 25);
		// var count = 0;
		// for (var transaction of action.transactions) {
		// 	state.transactionHistory[offset+count] = transaction;
		// 	count++;
		// }
		return Object.assign(state, {
			transactionHistory: action.data
		});
	default:
		return state;
	}
}
