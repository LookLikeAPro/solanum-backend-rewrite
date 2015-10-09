import React from "react";
import TopBar from "components/TopBar";
import ModalView from "containers/ModalView.jsx";

export default class Application extends React.Component {
	render() {
		return (<div>
			<ModalView />
			<TopBar />
			{this.props.children}
		</div>);
	}
}
