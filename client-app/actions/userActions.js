import * as types from "constants/ActionTypes";
import api from "api";

function setUser(user) {
	return {type: types.USER.SET, user: user};
}

export default {
	login(email, password) {
		return dispatch => {
			console.log("TRYING");
			return api.call("/api/auth/login", {headers: {email: email, password: password}})
				.then(json => dispatch(setUser({email: email, password: password})),
					error => console.log(error));
		};
	},
	fetchUser() {
		return dispatch => {
			return api.call("/api/user/current")
				.then(json => dispatch(setUser(json)),
					error => console.log(error));
		};
	}
};
