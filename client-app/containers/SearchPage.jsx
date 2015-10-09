import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {fetchNearbyVendors} from "actions";

class SearchPage extends Component {
	static propTypes = {
		dispatch: PropTypes.func,
		vendors: PropTypes.array
	};
	state = {
		page: 1
	};
	componentDidMount() {
		this.dispatch(fetchNearbyVendors(this.state.page));
	}
	dispatch = this.props.dispatch;
	render() {
		const {vendors} = this.props;
		return (<div className="content">
			<div>{vendors.map(function (farm, i) {
					return (<div key={i}>
						<p>{JSON.stringify(farm)}</p>
					</div>);
				})}</div>
		</div>);
	}
}

function select(state) {
	return {
		vendors: state.vendors.nearby
	};
}

export default connect(select)(SearchPage);
