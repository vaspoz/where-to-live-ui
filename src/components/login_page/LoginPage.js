import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Paper} from "@material-ui/core";
import PropTypes from "prop-types";
import * as globalActions from "../redux/actions/GlobalSettingsActions";
import * as countryActions from "../redux/actions/CountryActions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import LoginForm from './loginForm';
import {withRouter} from 'react-router';

class LoginPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loading: false
		};

		this.onClickLogin = this.onClickLogin.bind(this);
	}

	onClickLogin() {
		this.props.globalActions.loginUser('a', 'aa', this.props.history);
		this.setState({
			loading: true
		});
	}

	render() {
		return (
			<Paper className="base-data-container" elevation={5}>
				<CssBaseline/>
				<LoginForm onClick={this.onClickLogin} loading={this.state.loading}/>
			</Paper>
		);
	}
}

LoginPage.propTypes = {
	globalActions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
	return {
		globalActions: bindActionCreators(globalActions, dispatch),
		countryActions: bindActionCreators(countryActions, dispatch)
	};
}

function mapStateToProps(state) {
	return {
		isAuthorized: !!state.globalSettings.currentUser && Object.keys(state.globalSettings.currentUser).length > 0
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
