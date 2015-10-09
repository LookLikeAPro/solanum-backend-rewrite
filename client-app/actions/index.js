import * as types from "constants/ActionTypes";
import api from "api";
import userActions from "./userActions";
import modalActions from "./modalActions";

var actions = {
	loadTransactionHistory(page) {
		return {
			types: [types.ACCOUNT.TRANSACTIONHISTORY.REQUEST, types.ACCOUNT.TRANSACTIONHISTORY.PAYLOAD, types.REQUEST_FAIL],
			callAPI: () => fetch(`/api/transaction/paginate/${page}?detailed=true`),
			payload: {page}
		};
	},
	loadNearbyVendors(page) {
		var latitude = 37;
		var longitude = -122;
		return {
			types: [types.VENDOR.NEARBY.REQUEST, types.VENDOR.NEARBY.PAYLOAD, types.REQUEST_FAIL],
			shouldCallAPI: () => true,
			callAPI: () => fetch(`/api/vendor/nearby/paginate/${page}?latitude=${latitude}&longitude=${longitude}`),
			payload: {page}
		};
	},
	loadVendorByLink(link) {
		return {
			types: [types.VENDOR.BYLINK.REQUEST, types.VENDOR.BYLINK.PAYLOAD,types.REQUEST_FAIL],
			//shouldCallAPI: (state) => !state.posts[postId],
			callAPI: () => fetch(`/api/vendor/by-link/${link}`),
			payload: {link}
		};
	}
	//Async action example
	//fetchVendorByLink(link) {
	//	return dispatch => {
	//		return api.call(`/api/vendor/by-link/${link}`)
	//			.then(json => dispatch(setVendorByLink(link, json)),
	//				error => console.log(error));
	//	};
	//}
};

Object.assign(actions, userActions, modalActions);

export default actions;
