import React from 'react';
import {connect} from 'react-redux';
import CountryTable from './CountryTable';
import SelectedCountryList from './SelectedCountries';
import {bindActionCreators} from "redux";
import * as countryActions from '../redux/actions/CountryActions';

const styles = {
	container: {
		textAlign: 'center',
		paddingTop: 100,
		top: 50
	},
	leftColumn: {
		textAlign: 'center',
		// border: 'solid black',
		width: '50%',
		height: '200px',
		float: 'left'
	},
	rightColumn: {
		// border: 'solid black',
		marginLeft: '50%',
		height: '200px'
	},
	innerLeft: {
		// border: 'solid red',
		width: '50%',
		height: '200px',
		float: 'left'
	},
	innerRight: {
		// border: 'solid red',
		marginLeft: '50%',
		height: '200px'
	},
	table: {
		width: 200,
		margin: 'auto'
	}
};

class ComparisonDataInput extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.onCountrySelect = this.onCountrySelect.bind(this);
	}

	onCountrySelect(countryName) {
		const actions = this.props.countryActions;
		if (this.props.compareToList.includes(countryName)) {
			actions.deselectCompareToCountry(countryName);
		} else {
			actions.selectCompareToCountry(countryName);
		}
	}

	render() {
		return (
			<div>
				<div style={styles.leftColumn}>
					<h1>Select countries of your dreamsssss</h1>
					<div style={styles.innerLeft}>
						<CountryTable
							countryList={this.props.countryList}
							onCountrySelect={this.onCountrySelect}
						/>
					</div>
					<div style={styles.innerRight}>
						<SelectedCountryList
							compareToList={this.props.compareToList}
						/>
					</div>
				</div>
				<div style={styles.rightColumn}>
				</div>
			</div>
		);
	}
}

ComparisonDataInput.propTypes = {
	countryList: React.PropTypes.array.isRequired,
	compareToList: React.PropTypes.array.isRequired,
	countryActions: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		countryList: state.countryList,
		compareToList: state.compareTo
	};
}

function mapDispatchToProps(dispatch) {
	return {
		countryActions: bindActionCreators(countryActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ComparisonDataInput);
