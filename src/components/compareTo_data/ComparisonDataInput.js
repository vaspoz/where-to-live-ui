import React from 'react';
import {connect} from 'react-redux';
import CountryTable from './CountryTable';
import SelectedCountryList from './SelectedCountries';
import {bindActionCreators} from "redux";
import * as countryActions from '../redux/actions/CountryActions';
import * as chartActions from '../redux/actions/ChartActions';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const styles = {
	leftColumn: {
		textAlign: 'center',
		width: '50%',
		float: 'left'
	},
	rightColumn: {
		marginLeft: '50%'
	},
	innerLeft: {
		width: '50%',
		float: 'left'
	},
	innerRight: {
		marginLeft: '50%'
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
						<RaisedButton
							label="Submit"
							containerElement={<Link to="/comparison-chart"/>}
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
	countryActions: React.PropTypes.object.isRequired,
	chartActions: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		countryList: state.countryList,
		compareToList: state.compareTo
	};
}

function mapDispatchToProps(dispatch) {
	return {
		countryActions: bindActionCreators(countryActions, dispatch),
		chartActions: bindActionCreators(chartActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ComparisonDataInput);
