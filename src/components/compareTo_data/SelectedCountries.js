import React from 'react';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';

class SelectedCountries extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	render() {
		return (
			<List>
				<ListItem primaryText="Text1"/>
				<ListItem primaryText="Text2"/>
				<ListItem primaryText="Text3"/>
				<ListItem primaryText="Text4"/>
			</List>
		);
	}
}

SelectedCountries.propTypes = {
	// property: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		// state: state,
	};
}

export default connect(mapStateToProps)(SelectedCountries);
