import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {loadTransactionHistory} from "actions";

class AccountHistoryPage extends Component {
	static propTypes = {
		dispatch: PropTypes.func,
		transactions: PropTypes.array
	};
	state = {
		page: 1
	};

	componentDidMount() {
		this.dispatch(loadTransactionHistory(this.state.page));
	}
	dispatch = this.props.dispatch;
	render() {
		const {transactions} = this.props;
		return (
			<div>
				History
				<div>{transactions.map(function (transaction, i) {
					return (<div key={i}>
						<p>{JSON.stringify(transaction)}</p>
					</div>);
				})}</div>
			</div>
		);
	}
}

function select(state) {
	return {
		transactions: state.account.transactionHistory
	};
}

export default connect(select)(AccountHistoryPage);
