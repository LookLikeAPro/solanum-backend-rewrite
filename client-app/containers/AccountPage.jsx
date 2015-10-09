import React from "react";
import {RouteHandler, Link} from "react-router";

export default class AccountPage extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="large-2 columns">
					<ul>
						<Link to="account/info"><li>Information</li></Link>
						<li>Activity</li>
						<Link to="account/history"><li>Purchase History</li></Link>
						<li>Farm Management</li>
					</ul>
				</div>
				<div className="large-10 columns"><RouteHandler/></div>
			</div>
		);
	}
}
