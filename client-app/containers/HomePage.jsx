import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import * as actions from "actions";

class HomePage extends Component {
	static propTypes = {
		dispatch: PropTypes.func,
		currentUser: PropTypes.object
	};
	dispatch = this.props.dispatch;
	_onClick = () => {
		this.dispatch(actions.fetchUser());
	}
	render() {
		const {currentUser} = this.props;

		return (<div>
			<h2>Homepage</h2>
			<p>This is the homepage.</p>
			<p>{JSON.stringify(currentUser)}</p>
			<button onClick={this._onClick}></button>
			<p>{JSON.stringify(this.state)}</p>
			<p>Try to go to a todo list page.</p>
		</div>);
	}
}

function select(state) {
	return {
		currentUser: state.users.currentUser
	};
}

export default connect(select)(HomePage);
