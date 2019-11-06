import React from 'react';
import PropTypes from 'prop-types';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import LoginButton from './loginButton';
import SignupButton from './signupButton';
import Avatar from './avatar';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as globalActions from "../redux/actions/GlobalSettingsActions";
import {Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";


const style = {
	refresh: {
		visibility: false,
		position: 'relative',
		display: "flex",
		float: "left"
	},
	authdiv: {
		float: "right",
		align: "right",
		display: "flex"
	}
};

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: 'gray'
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));


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

	static getDerivedStateFromProps(props, state) {
		return {
			authorized: !!props.currentUser && Object.keys(props.currentUser).length > 0
		};
	}

	onClickLogin() {
		this.props.globalActions.loginUser('a', 'aa');
	}

	onClickSignup() {
		this.props.globalActions.signUpUser('a', 'aa');
	}

	onClickLogout() {
		this.props.globalActions.logout();
	}

	render() {
		return (
			<AppBar position="static" style={{backgroundColor: '#f5f5f5'}}>
				<ToolBar>
					<Typography type="title" style={{flex: 1}}>
						Title
					</Typography>
					<CircularProgress color="secondary"  value={100}/>
					<LoginButton isVisible={!this.state.authorized}/>
					<SignupButton isVisible={!this.state.authorized}/>
					<Avatar isVisible={this.state.authorized} clickEvent={this.onClickLogout}/>
				</ToolBar>
			</AppBar>
		);
	}
}

	/*<RefreshIndicator*/
/*	left={0}*/
/*	top={0}*/
/*	size={25}*/
/*	style={style.refresh}*/
/*	status={this.props.loading ? 'loading' : 'hide'}*/
/*<div style={style.authdiv}>*/

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
