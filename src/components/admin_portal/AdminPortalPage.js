import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Container} from "@material-ui/core";
import BEapi from "../ajax/api";
import LogsElement from "./logsElement";

class AdminPortalPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			userCount: 0,
			logs: []
		};

		BEapi.adminGetUserCount().then(count => this.setState({userCount: count}));
		BEapi.adminGetLogs(-1).then(logsJson => this.setState({logs: logsJson}));

	}

	render() {
		return (
			<Container>
				<CssBaseline/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				User count: {this.state.userCount}
				<LogsElement logs={this.state.logs}/>
			</Container>
		);
	}
}

export default AdminPortalPage;
