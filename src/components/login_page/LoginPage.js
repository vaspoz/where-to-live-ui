import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Paper from 'material-ui/Paper';
import UsernameInput from "./usernameInput";
import PasswordInput from "./passwordInput";
import SubmitButton from "./submit";
import * as globalActions from "../redux/actions/GlobalSettingsActions";

class LoginPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};

		this.onClickLogin = this.onClickLogin.bind(this);
		this.onClickSignup = this.onClickSignup.bind(this);
	}

	onClickLogin() {
		this.props.globalActions.loginUser('a','aa');
	}

	onClickSignup() {
		this.props.globalActions.signUpUser('a','aa');
	}

	render() {
		return (
			<Paper zDepth={2} className="base-data-container">
				<div className="base-data-text-container">
					<SubmitButton disabled={false} clickEvent={this.onClickLogin} label="Login"/>
					<SubmitButton disabled={false} clickEvent={this.onClickSignup} label="Sign up"/>
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
		globalActions: bindActionCreators(globalActions, dispatch)
	};
}

function mapStateToProps(state) {
	return {
		state: state
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
