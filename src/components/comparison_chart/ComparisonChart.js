import React from 'react';
import {connect} from 'react-redux';
import * as chartActions from '../redux/actions/ChartActions';
import {bindActionCreators} from 'redux';
import Paper from 'material-ui/Paper';
import {Bar} from 'react-chartjs-2';
import randomColor from 'randomcolor';

class ComparisonChart extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.prepareCityRatesForChart = this.prepareCityRatesForChart.bind(this);
	}

	componentWillMount() {
		this.props.chartActions.fetchChartsForCountries(
			this.props.baseCountry,
			this.props.baseCity,
			this.props.compareToList
		);
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

	render() {
		const getOptions = (title) => {
			return {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				layout: {
					padding: 20
				},
				maintainAspectRatio: false,
				title: {
					display: true,
					text: title
				}
			};
		};
		return (
			<div id="chart-container">
				{this.props.calculatedRates.map(countryRate => {
					const chartData = this.prepareCityRatesForChart(countryRate.cityRates);
					return <Paper id="paper" zDepth={2}>
						<Bar id="chart" data={chartData} options={getOptions(countryRate.country)}/>
					</Paper>
				})}
			</div>
		);
	}
}


ComparisonChart.propTypes = {
	baseCountry: React.PropTypes.string.isRequired,
	baseCity: React.PropTypes.string.isRequired,
	compareToList: React.PropTypes.array.isRequired,
	calculatedRates: React.PropTypes.array.isRequired,
	chartActions: React.PropTypes.object.isRequired
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
		baseCountry: 'Poland',
		baseCity: 'Gdansk',
		compareToList: ['Australia', 'Argentina'],
		calculatedRates: store.calculatedRates
	};
}

function mapDispatchToProps(dispatch) {
	return {
		chartActions: bindActionCreators(chartActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ComparisonChart);
