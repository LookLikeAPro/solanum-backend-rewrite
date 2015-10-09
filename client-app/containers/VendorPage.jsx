import React, {Component, PropTypes} from "react";
import {RouteHandler} from "react-router";
import {connect} from "react-redux";
import {loadVendorByLink} from "actions";

class VendorPage extends Component {
	// static propTypes = {
	// 	params: React.PropTypes.object.isRequired
	// };
	state = {};
	dispatch = this.props.dispatch;
	componentDidMount() {
		this.dispatch(loadVendorByLink([this.props.params.link]));
	}
	render() {
		const {vendors, params} = this.props;
		return (<div>
			<h2>VendorPage</h2>
			<h2>{JSON.stringify(vendors[params.link])}</h2>
		</div>);
	}
}

function select(state) {
	console.log(state.vendors);
	return {
		vendors: state.vendors.byLink
	};
}

export default connect(select)(VendorPage);
