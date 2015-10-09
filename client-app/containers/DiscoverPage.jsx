import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {loadNearbyVendors} from "actions";
import VendorPane from "components/VendorPane";
import HolyGrailLayout from "components/layouts/HolyGrailLayout";

class DiscoverPage extends Component {
	static propTypes = {
		dispatch: PropTypes.func,
		vendors: PropTypes.array
	};
	state = {
		page: 1
	};
	componentDidMount() {
		this.dispatch(loadNearbyVendors(this.state.page));
	}
	dispatch = this.props.dispatch;
	render() {
		const {vendors} = this.props;
		return (<HolyGrailLayout>
			<h2>Discover</h2>
			<span className="label label-default">Default</span>
			<span className="label label-primary">Primary</span>
			<span className="label label-success">Success</span>
			<span className="label label-info">Info</span>
			<span className="label label-warning">Warning</span>
			<span className="label label-danger">Danger</span>
			<p>Page with nearby farms</p>
			<div>{vendors.map(function (farm, i) {
				return (<div key={i}>
						<p>{JSON.stringify(farm)}</p>
					</div>);
			})}</div>
			<VendorPane vendor={vendors[0]} />
		</HolyGrailLayout>);
	}
}

function select(state) {
	return {
		vendors: state.vendors.nearby
	};
}

export default connect(select)(DiscoverPage);
