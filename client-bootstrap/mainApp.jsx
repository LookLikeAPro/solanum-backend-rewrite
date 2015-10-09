import React from "react";
import Router from "react-router";
import routes from "../client-app/mainRoutes";
import history from "../client-app/history";
import {Provider} from "react-redux";
import configureStore from "configureStore";

const store = configureStore();

React.render((<Provider store={store}>
		{() => <Router children={routes} history={history} />}
	</Provider>), document.getElementById("content"));
