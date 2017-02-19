import React from 'react';
import {connect} from 'react-redux';
import CountryTable from './CountryTable';

const styles = {
	container: {
		textAlign: 'center',
		paddingTop: 100,
		top: 50
	}
};

class ComparisonDataInput extends React.Component {
	constructor(props, context) {
		super(props, context);
	}


	render() {
		return (
			<div style={styles.container}>
				<h1>Select countries of your dreams</h1>
				<CountryTable countryList={this.props.countryList}/>
				<div>
					<h2>Test</h2>
				</div>
			</div>
		);
	}
}

ComparisonDataInput.propTypes = {
	countryList: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
	return {
		countryList: state.countryList
	};
}

export default connect(mapStateToProps)(ComparisonDataInput);
