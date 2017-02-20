import React from 'react';
import {connect} from 'react-redux';
import CountryTable from './CountryTable';
import SelectedCountryList from './SelectedCountries';

const styles = {
	container: {
		textAlign: 'center',
		paddingTop: 100,
		top: 50
	},
	table: {
		width: 200,
		margin: 'auto'
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
				<div style={{display: 'inline'}}>
					<div style={styles.table}>
						<CountryTable countryList={this.props.countryList}/>
					</div>
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
