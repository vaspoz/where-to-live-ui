import React from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import * as globalActions from "../redux/actions/GlobalSettingsActions";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";

class SignupPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};

		this.onClickSignup = this.onClickSignup.bind(this);

	}

	onClickSignup() {
		this.props.globalActions.signUpUser('aa', 'aa', 'aa', 'aa');
	}

	render() {
		return (
			<Paper className="base-data-container">
				<div className="base-data-text-container">
					<Button variant="contained" color="primary" onClick={this.onClickSignup}>
						Signup
					</Button>
				</div>
			</Paper>
		);
	}
}

SignupPage.propTypes = {
	globalActions: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
