import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Paper from 'material-ui/Paper';
import SubmitButton from "./submit";
import * as globalActions from "../redux/actions/GlobalSettingsActions";
import * as countryActions from "../redux/actions/CountryActions";

class LoginPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};

		this.onClickLogin = this.onClickLogin.bind(this);
		this.onClickSignup = this.onClickSignup.bind(this);
		this.onClickLogout = this.onClickLogout.bind(this);
	}

	onClickLogin() {
		this.props.countryActions.fetchCountryListFromBE();
		this.props.globalActions.loginUser('a','aa');
	}

	onClickSignup() {
		this.props.globalActions.signUpUser('a','aa');
	}

	onClickLogout() {
		this.props.globalActions.logout();
	}

	render() {
		return (
			<Paper zDepth={2} className="base-data-container">
				<div className="base-data-text-container">
					<SubmitButton disabled={false} clickEvent={this.onClickLogin} label="Login"/>
					<SubmitButton disabled={false} clickEvent={this.onClickSignup} label="Sign up"/>
					<SubmitButton disabled={false} clickEvent={this.onClickLogout} label="Logout"/>
				</div>
			</Paper>
		);
	}
}

LoginPage.propTypes = {
	globalActions: React.PropTypes.object.isRequired
};


function mapDispatchToProps(dispatch) {
	return {
		globalActions: bindActionCreators(globalActions, dispatch),
		countryActions: bindActionCreators(countryActions, dispatch)
	};
}

function mapStateToProps(state) {
	return {
		state: state
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
