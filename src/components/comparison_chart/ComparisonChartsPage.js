import React from 'react';
import {connect} from 'react-redux';
import * as chartActions from '../redux/actions/ChartActions';
import * as globalSettingsActions from '../redux/actions/GlobalSettingsActions';
import {bindActionCreators} from 'redux';
import randomColor from 'randomcolor';
import SingleChart from './singleChart';
import SettingsPanel from './settingsPanel';

class ComparisonChartsPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.prepareCityRatesForChart = this.prepareCityRatesForChart.bind(this);
		this.onSortOrderChange = this.onSortOrderChange.bind(this);
	}

	componentWillMount() {
		if (!this.props.baseCity || !this.props.baseCountry) {
			alert('Base data is empty!');
			return;
		}
		this.props.compareToList.forEach(country => {
			this.props.chartActions.fetchChartForCountry(
				this.props.baseCountry,
				this.props.baseCity,
				country
			);
		});
	}

	getRandomColors(amount, hue) {
		return randomColor({
			count: amount,
			hue: hue,
			luminosity: 'light'
		});
	}

	prepareCityRatesForChart(cityRates) {
		const labels = cityRates.map(singleCityRate => singleCityRate.city);
		return {
			labels: labels,
			datasets: [
				{
					label: 'Salary',
					data: cityRates.map(singleCityRate => singleCityRate.salary),
					backgroundColor: this.getRandomColors(labels.length, 'green'),
					borderWidth: 1
				},
				{
					label: 'Expenses',
					data: cityRates.map(singleCityRate => singleCityRate.expenses),
					backgroundColor: this.getRandomColors(labels.length, 'red')
				}
			]
		};
	}

	getChartDataIfExist(country) {
		const countryRates = this.props.calculatedRates
			.filter(rates => rates.country === country)[0];
		if (!countryRates)
			return null;
		return this.prepareCityRatesForChart(countryRates.cityRates);
	}

	onSortOrderChange(event, order) {
		this.props.globalSettingsActions.changeSortOrder(order);
	}

	render() {
		return (
			<div>
				<SettingsPanel onSortOrderChange={this.onSortOrderChange}/>
				<div id="chart-container">
					{this.props.compareToList.map(country => {
						const chartData = this.getChartDataIfExist(country);
						return <SingleChart key={country} chartData={chartData} country={country}/>;
					})}
				</div>
			</div>
		);
	}
}

ComparisonChartsPage.propTypes = {
	baseCountry: React.PropTypes.string.isRequired,
	baseCity: React.PropTypes.string.isRequired,
	compareToList: React.PropTypes.array.isRequired,
	calculatedRates: React.PropTypes.array.isRequired,
	chartActions: React.PropTypes.object.isRequired,
	globalSettingsActions: React.PropTypes.object.isRequired
};

function mapStateToProps(store) {
	return {
		baseCountry: store.baseData.country,
		baseCity: store.baseData.city,
		compareToList: store.compareTo,
		calculatedRates: store.calculatedRates
	};
}

function tempMapStateToProps(store) {
	return {
		baseCountry: store.baseData.country,
		baseCity: store.baseData.city,
		compareToList: store.compareTo,
		calculatedRates: store.calculatedRates
	};
}

function mapDispatchToProps(dispatch) {
	return {
		chartActions: bindActionCreators(chartActions, dispatch),
		globalSettingsActions: bindActionCreators(globalSettingsActions, dispatch)
	};
}

export default connect(tempMapStateToProps, mapDispatchToProps)(ComparisonChartsPage);
