import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import * as actions from "actions";
import TopBarSearch from "components/TopBarSearch";

class TopBar extends Component {
	static propTypes = {
		dispatch: PropTypes.func,
		isLoggedIn: PropTypes.bool,
		email: PropTypes.string
	};
	static contextTypes = {
		router: PropTypes.func
	};
	componentDidMount() {
		this.dispatch(actions.fetchUser());
	}
	componentWillUnmount() {
	}
	dispatch = this.props.dispatch;
	handleLoginClick = () => {
		this.dispatch(actions.queueLoginModal());
	}
	handleSignupClick = () => {
		this.dispatch(actions.queueSignupModal());
	}
	render() {
		const {isLoggedIn, email} = this.props;
		return (
			<div className="topBar">
				<div className="section">
					<Link to={"/home"}><img src="test" className="logo"/></Link>
				</div>
				<div className="section">
					<TopBarSearch />
				</div>
				<div className="spacer"></div>
				<div className="section">
					<Link to={"/discover"}><button className="clear">Discover</button></Link>
				</div>
				<div className="section">
					{isLoggedIn ?
						(<Link to={"/account"}><button className="clear">Account</button></Link>) :
						([
							<button key={1} className="clear" onClick={this.handleSignupClick}>Sign up</button>,
							<button key={2} className="clear" onClick={this.handleLoginClick}>Log in</button>
						])}
				</div>
			</div>
		);
	}
}

function select(state) {
	return {
		isLoggedIn: (state.users.currentUser !== null),
		email: state.users.currentUser? state.users.currentUser.email : null
	};
}

export default connect(select)(TopBar);
