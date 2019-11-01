import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Paper from 'material-ui/Paper';
import LoginButton from './loginButton';
import SignupButton from './signupButton';
import Avatar from './avatar';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as globalActions from "../redux/actions/GlobalSettingsActions";

const style = {
	refresh: {
		// display: 'inline-block',
		visibility: false,
		position: 'relative',
		display: "flex",
		float: "left"
	},
	authdiv: {
		float: "right",
		display: "flex"
	}
};

class Header extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			authorized: !!this.props.currentUser && Object.keys(this.props.currentUser).length > 0
		};

		this.onClickLogin = this.onClickLogin.bind(this);
		this.onClickSignup = this.onClickSignup.bind(this);
		this.onClickLogout = this.onClickLogout.bind(this);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		this.setState({
			authorized: !!nextProps.currentUser && Object.keys(nextProps.currentUser).length > 0
		});
	}

	onClickLogin() {
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
			<Paper zDepth={2} className="header-paper">
				<RefreshIndicator
					left={0}
					top={0}
					size={25}
					style={style.refresh}
					status={this.props.loading ? 'loading' : 'hide'}
				/>
				<div style={style.authdiv}>
					<LoginButton isVisible={!this.state.authorized}/>
					<SignupButton isVisible={!this.state.authorized}/>
					<Avatar isVisible={this.state.authorized} clickEvent={this.onClickLogout}/>
				</div>
			</Paper>
		);
	}
}

// Header.propTypes = {
// 	loading: React.PropTypes.bool.isRequired,
// 	authorized: React.PropTypes.bool.isRequired
// };

function mapDispatchToProps(dispatch) {
	return {
		globalActions: bindActionCreators(globalActions, dispatch)
	};
}

function mapStateToProps(state) {
	return {
		loading: state.ajaxConnections > 0,
		currentUser: state.globalSettings.currentUser
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
