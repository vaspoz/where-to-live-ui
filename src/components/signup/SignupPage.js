import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import SignupForm from "./signupForm";
import PropTypes from "prop-types";
import * as globalActions from "../redux/actions/GlobalSettingsActions";
import {withRouter} from "react-router";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

class SignupPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loading: false,
			firstName: "",
			lastName: "",
			username: "",
			password: "",
			countryOrigin: "",
			loginErrorMessage: "",
			authorized: false
		};

		this.onClickSignup = this.onClickSignup.bind(this);
		this.onTextFieldChange = this.onTextFieldChange.bind(this);
		this.onUsernameEnter = this.onUsernameEnter.bind(this);
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

	onClickSignup() {
		event.preventDefault();
		this.props.globalActions.signUpUser(this.state.firstName, this.state.lastName, this.state.username, this.state.password, this.state.email, this.state.countryOrigin);
		this.setState({
			loading: true
		});
	}

	onTextFieldChange(event) {
		event.persist();
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<Container maxWidth="xs">
				<CssBaseline/>
				<SignupForm
					onSubmitClick={this.onClickSignup}
					errorMessage={this.state.loginErrorMessage}
					loading={this.state.loading}
					onInputChange={this.onTextFieldChange}
					onUsernameEnter={this.onUsernameEnter}
				/>
			</Container>
		);
	}
}

SignupPage.propTypes = {
	globalActions: PropTypes.object.isRequired,
	history: PropTypes.object
};

function mapDispatchToProps(dispatch) {
	return {
		globalActions: bindActionCreators(globalActions, dispatch)
	};
}

function mapStateToProps(state) {
	return {
		isAuthorized: !!state.globalSettings.currentUser && Object.keys(state.globalSettings.currentUser).length > 0,
		loginError: state.globalSettings.loginError
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupPage));
