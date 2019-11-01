import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from "material-ui/RaisedButton";
import {Link} from "react-router";

class SignupPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	render() {
		return (
			<Paper zDepth={2} className="base-data-container">
				<div className="base-data-text-container">
					<RaisedButton
						label="Base Data"
						containerElement={<Link to="/base-data"/>}
					/>
				</div>
			</Paper>
		);
	}
}

SignupPage.propTypes = {
};


function mapDispatchToProps(dispatch) {
	return {
	};
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
