import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router";
import {Provider} from "react-redux";
import configureStore from "configureStore";

import routes from "./mainRoutes";
import history from "./history";

const store = configureStore();

ReactDOM.render((<Provider store={store}>
		<Router children={routes} history={history} />
	</Provider>), document.getElementById("content"));
