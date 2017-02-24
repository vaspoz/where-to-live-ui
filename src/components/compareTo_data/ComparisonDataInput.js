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
	container: {
		textAlign: 'center',
		paddingTop: 100,
		top: 50
	},
	leftColumn: {
		textAlign: 'center',
		border: 'solid black',
		width: '50%',
		height: '200px',
		float: 'left'
	},
	rightColumn: {
		border: 'solid black',
		marginLeft: '50%',
		height: '200px'
	},
	innerLeft: {
		border: 'solid red',
		width: '50%',
		height: '200px',
		float: 'left'
	},
	innerRight: {
		border: 'solid red',
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
		this.fetchChartData = this.fetchChartData.bind(this);
	}

	onCountrySelect(countryName) {
		const actions = this.props.countryActions;
		if (this.props.compareToList.includes(countryName)) {
			actions.deselectCompareToCountry(countryName);
		} else {
			actions.selectCompareToCountry(countryName);
		}
	}

	fetchChartData(event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.chartActions.fetchChartsForCountries(
			this.props.baseCountry,
			this.props.baseCity,
			this.props.compareToList
		);
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
							containerElement={<Link to="/comparison-chart" onClick={this.fetchChartData}/>}
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
	baseCountry: React.PropTypes.string.isRequired,
	baseCity: React.PropTypes.string.isRequired,
	countryList: React.PropTypes.array.isRequired,
	compareToList: React.PropTypes.array.isRequired,
	countryActions: React.PropTypes.object.isRequired,
	chartActions: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		baseCountry: state.baseData.country,
		baseCity: state.baseData.city,
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
