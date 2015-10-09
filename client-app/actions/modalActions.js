import * as types from "constants/ActionTypes";
import api from "api";

export default {
	queueLoginModal() {
		return {
			type: types.MODAL.OPEN,
			modal: "LOGIN"
		};
	},
	queueSignupModal() {
		return {
			type: types.MODAL.OPEN,
			modal: "SIGNUP"
		};
	},
	closeModal() {
		return {
			type: types.MODAL.CLOSE
		};
	}
};
