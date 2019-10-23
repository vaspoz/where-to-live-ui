import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';

class LoginPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
		};
	}

	render() {
		return (
			<Paper zDepth={2} className="base-data-container">
				<div className="base-data-text-container">
					<h1>Login</h1>
					<button onClick={alert('fff')}>button</button>
					<a href="http://localhost:8080/login">Login with Facebook</a>
				</div>
			</Paper>
		);
	}
}

LoginPage.propTypes = {
};

function mapDispatchToProps(dispatch) {
	return {
	};
}

function mapStateToProps(state) {
	return {
		state: state
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
