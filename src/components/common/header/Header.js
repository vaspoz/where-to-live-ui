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
import {Typography} from "@material-ui/core";
import PersonPinCircleOutlinedIcon from '@material-ui/icons/PersonPinCircleOutlined';
import AddIcon from '@material-ui/icons/Add';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

class Header extends React.Component {
	static getDerivedStateFromProps(props) {
		return {
			authorized: !!props.currentUser && Object.keys(props.currentUser).length > 0
		};
	}

	constructor(props, context) {
		super(props, context);

		this.state = {
			authorized: !!this.props.currentUser && Object.keys(this.props.currentUser).length > 0
		};

		this.onClickLogout = this.onClickLogout.bind(this);
	}

	onClickLogout() {
		this.props.globalActions.logout();
	}

	render() {
		return (
			<AppBar position="fixed" color="primary">
				<ToolBar>
					<PersonPinCircleOutlinedIcon fontSize="large" color="action" style={{marginLeft: '-10px'}}/>
					<AddIcon fontSize="large" color="white" style={{marginLeft: '-5px'}}/>
					<FavoriteBorderIcon fontSize="large" color="secondary" style={{marginLeft: '-5px'}}/>
					<div style={{marginLeft: '15px'}}>
						<Typography variant="h4" style={{fontWeight: '500'}}>Aliyah</Typography>
						Find a better place to live
					</div>
					{this.props.loading && <CircularProgress color="secondary" value={100} size={30}/>}
					<div style={{flex: 1}}/>
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
	authorized: PropTypes.bool,
	currentUser: PropTypes.object,
	globalActions: PropTypes.object
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
