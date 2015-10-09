import React from "react";
import {Route} from "react-router";
import "./scss/index.scss";

import Application from "containers/Application";
import HomePage from "containers/HomePage";
import NotFoundPage from "containers/NotFoundPage";

import WelcomePage from "containers/WelcomePage";
import VendorPage from "containers/VendorPage";
import DiscoverPage from "containers/DiscoverPage";
import SearchPage from "containers/SearchPage";
import AccountPage from "containers/AccountPage";
import AccountInfoPage from "containers/AccountInfoPage";
import AccountHistoryPage from "containers/AccountHistoryPage";

// polyfill
//import "babel-core/polyfill";
if (!Object.assign) Object.assign = React.__spread;

// export routes
export default (
	<Route>
		<Route path="welcome" component={WelcomePage} />
		<Route path="/" component={Application}>
			<Route path="home" component={HomePage} />
			<Route path="/discover" component={DiscoverPage} />
			<Route path="search" component={SearchPage} />
			<Route path="vendor/:link" component={VendorPage} />
			<Route path="account" component={AccountPage}>
				<Route path="info" component={AccountInfoPage} />
				<Route path="history" component={AccountHistoryPage} />
			</Route>
		</Route>
		<Route path="*" component={NotFoundPage}/>
	</Route>
);
