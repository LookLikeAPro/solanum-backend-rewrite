import keyMirror from "key-mirror-nested";

export default keyMirror({
	TODO: {
		ADD: null,
		DELETE: null,
		EDIT: null,
		COMPLETE: null,
		COMPLETE_ALL: null,
		CLEAR_COMPLETED: null
	},
	USER: {
		SET: null,
		LOGIN: null,
		LOGOUT: null
	},
	MODAL: {
		OPEN: null,
		CLOSE: null
	},
	ACCOUNT: {
		TRANSACTIONHISTORY: {
			REQUEST: null,
			PAYLOAD: null,
			FAIL: null,
			INSERT: null
		}
	},
	VENDOR: {
		NEARBY: {
			REQUEST: null,
			PAYLOAD: null,
			FAIL: null,
			INSERT: null
		},
		BYLINK: {
			REQUEST: null,
			PAYLOAD: null,
			FAIL: null,
			SET: null
		}
	},
	REQUEST_FAIL: null
});
