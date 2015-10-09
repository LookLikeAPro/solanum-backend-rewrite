import {combineReducers} from "redux";
import users from "./users";
import notifications from "./notifications";
import account from "./account";
import vendors from "./vendors";

const rootReducer = combineReducers({
	users, notifications, account, vendors
});

export default rootReducer;
