import React from 'react';
import {connect} from 'react-redux';

class ComparisonDataInput extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {};
	}

	render() {
		return (
			<div>
				<h1>Select countries of your dreams</h1>
			</div>
		);
	}
}

ComparisonDataInput.propTypes = {
	// property: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		// state: state,
	};
}

export default connect(mapStateToProps)(ComparisonDataInput);
