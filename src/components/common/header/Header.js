import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import LoginButton from './loginButton';
import SignupButton from './signupButton';
import Avatar from './avatar';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as globalActions from "../../redux/actions/GlobalSettingsActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import AboutPageButton from "./aboutPageButton";

class Header extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			authorized: !!this.props.currentUser && Object.keys(this.props.currentUser).length > 0
		};

		this.onClickLogout = this.onClickLogout.bind(this);
	}

	static getDerivedStateFromProps(props) {
		return {
			authorized: !!props.currentUser && Object.keys(props.currentUser).length > 0
		};
	}

	onClickLogout() {
		this.props.globalActions.logout();
	}

	render() {
		return (
			<AppBar position="fixed" color="default">
				<ToolBar>
					{this.props.loading && <CircularProgress color="secondary" value={100} size={30}/>}
					<div style={{flex: 1}}/>
					<AboutPageButton />
					<LoginButton isVisible={!this.state.authorized}/>
					<SignupButton isVisible={!this.state.authorized}/>
					<Avatar isVisible={this.state.authorized} onClickAction={this.onClickLogout}/>
				</ToolBar>
			</AppBar>
		);
	}
}

Header.propTypes = {
	loading: PropTypes.bool,
	authorized: PropTypes.bool
};

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
