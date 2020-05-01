import Button from "@material-ui/core/Button";
import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as globalActions from "../../redux/actions/GlobalSettingsActions";
import {bindActionCreators} from 'redux';
import {withRouter} from "react-router";

class TryMeButton extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			authorized: false
		};

		this.onClickTryMe = this.onClickTryMe.bind(this);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if (this.state.authorized) return;
		if (nextProps.isAuthorized) {
			this.setState({
				authorized: true
			});
			this.props.history.push('/base-data');
		}
	}

	onClickTryMe () {
		this.props.globalActions.loginUser('test', 'test');
	}

	render() {
		return (
			<div>
				{this.props.isVisible &&
				<Button variant="contained" onClick={this.onClickTryMe} style={{backgroundColor: 'green', color: 'white'}}>
					Try Me
				</Button>}
			</div>
		);
	}
}


TryMeButton.propTypes = {
	isVisible: PropTypes.bool.isRequired,
	history: PropTypes.object
};

function mapDispatchToProps(dispatch) {
	return {
		globalActions: bindActionCreators(globalActions, dispatch)
	};
}

function mapStateToProps(state) {
	return {
		isAuthorized: !!state.globalSettings.currentUser && Object.keys(state.globalSettings.currentUser).length > 0
	};
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TryMeButton));
