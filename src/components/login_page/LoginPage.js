import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Box, Container} from "@material-ui/core";
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
			loading: false,
			username: "",
			password: "",
			loginErrorMessage: "",
			authorized: false
		};

		this.onClickLogin = this.onClickLogin.bind(this);
		this.onUsernameEnter = this.onUsernameEnter.bind(this);
		this.onPasswordEnter = this.onPasswordEnter.bind(this);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if (this.state.authorized) return;
		if (nextProps.loginError)
			this.setState({
				loginErrorMessage: nextProps.loginError,
				loading: false
			});
		if (nextProps.isAuthorized) {
			this.setState({
				loading: false,
				authorized: true
			});
			this.props.history.push('/base-data');
		}
	}

	onUsernameEnter(event) {
		event.persist();
		this.setState({
			username: event.target.value,
			loginErrorMessage: ""
		});
	}

	onPasswordEnter(event) {
		event.persist();
		this.setState({
			password: event.target.value,
			loginErrorMessage: ""
		});
	}

	onClickLogin() {
		this.props.globalActions.loginUser(this.state.username, this.state.password);
		this.setState({
			loading: true
		});
	}

	render() {
		return (
			<Container maxWidth={'xs'}>
				<CssBaseline/>
				<LoginForm
					onSubmitClick={this.onClickLogin}
					loading={this.state.loading}
					onUsernameEnter={this.onUsernameEnter}
					onPasswordEnter={this.onPasswordEnter}
					errorMessage={this.state.loginErrorMessage}
				/>
			</Container>
		);
	}
}

LoginPage.propTypes = {
	globalActions: PropTypes.object.isRequired,
	history: PropTypes.object
};

function mapDispatchToProps(dispatch) {
	return {
		globalActions: bindActionCreators(globalActions, dispatch),
		countryActions: bindActionCreators(countryActions, dispatch)
	};
}

function mapStateToProps(state) {
	return {
		isAuthorized: !!state.globalSettings.currentUser && Object.keys(state.globalSettings.currentUser).length > 0,
		loginError: state.globalSettings.loginError
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
