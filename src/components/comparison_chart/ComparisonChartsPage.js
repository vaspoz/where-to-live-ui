import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import * as chartActions from '../redux/actions/ChartActions';
import * as globalSettingsActions from '../redux/actions/GlobalSettingsActions';
import {bindActionCreators} from 'redux';
import randomColor from 'randomcolor';
import SingleChart from './singleChart';
import CountryOverview from './countryOverview';
import Grid from '@material-ui/core/Grid';
import {Container} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

class ComparisonChartsPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.prepareCityRatesForChart = this.prepareCityRatesForChart.bind(this);
		this.getNoOfCities = this.getNoOfCities.bind(this);
		this.getAvgProfit = this.getAvgProfit.bind(this);
		this.getOverallChartDataIfExist = this.getOverallChartDataIfExist.bind(this);
	}

	componentWillMount() {
		if (!this.props.baseCity || !this.props.baseCountry) {
			alert('Base data is empty!');
			return;
		}
		this.props.compareToList.forEach(countryInfo => {
			this.props.chartActions.fetchChartForCountry(
				this.props.baseCountry,
				this.props.baseCity,
				countryInfo.countryName
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

	prepareOverallChart(cityRates) {
		const labels = cityRates.map(singleCityRate => singleCityRate.city);
		return {
			labels: labels,
			datasets: [
				{
					label: 'Profit Value',
					data: cityRates.map(singleCityRate => singleCityRate.overall),
					backgroundColor: this.getRandomColors(labels.length, 'blue'),
					borderWidth: 1
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

	getOverallChartDataIfExist(country) {
		const countryRates = this.props.calculatedRates
			.filter(rates => rates.country === country)[0];
		if (!countryRates)
			return null;
		return this.prepareOverallChart(countryRates.cityRates);
	}

	getNoOfCities(countryName) {
		const calcRatesForCurrentCountry = this.props.calculatedRates.filter(countryRates => countryRates.country === countryName)[0];
		let noOfCities;
		if (calcRatesForCurrentCountry) {
			noOfCities = calcRatesForCurrentCountry.cityRates.length;
		}
		return noOfCities || 0;
	}

	getAvgProfit(countryName) {
		const calcRatesForCurrentCountry = this.props.calculatedRates.filter(countryRates => countryRates.country === countryName)[0];
		let averageProfit;
		if (calcRatesForCurrentCountry) {
			let overallFlattened = 0;
			calcRatesForCurrentCountry.cityRates.forEach(cityRate => overallFlattened += cityRate.overall);
			averageProfit = (overallFlattened / this.getNoOfCities(countryName)).toFixed(2);
		}
		return parseFloat(averageProfit || 0);
	}

	render() {
		return (
			<Container maxWidth="lg">
				<CssBaseline/>
				<Grid container style={{minHeight: '90vh', marginTop: '0px'}} alignItems="center"
							justify="space-around" spacing={4}>
					{this.props.compareToList.map((country, index) => {
						// const overallChartData = this.getOverallChartDataIfExist(country.countryName);
						const noOfCities = this.getNoOfCities(country.countryName);
						const averageProfit = this.getAvgProfit(country.countryName);
						return (
							<CountryOverview
								key={country.countryName + "_" + index}
								noOfCities={noOfCities}
								avgProfit={averageProfit}
								countryName={country.countryName}
								countryCode={country.countryCode}/>
						);
					})}
				</Grid>
			</Container>
		);
	}
}

ComparisonChartsPage.propTypes = {
	baseCountry: PropTypes.string.isRequired,
	baseCity: PropTypes.string.isRequired,
	compareToList: PropTypes.array.isRequired,
	calculatedRates: PropTypes.array.isRequired,
	chartActions: PropTypes.object.isRequired,
	globalSettingsActions: PropTypes.object.isRequired
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
		// compareToList: store.compareTo,
		compareToList: [
			{
				countryName: 'Netherlands',
				countryCode: 'NL'
			},
			{
				countryName: 'Netherlands',
				countryCode: 'NL'
			},
			{
				countryName: 'Netherlands',
				countryCode: 'NL'
			},
			{
				countryName: 'Netherlands',
				countryCode: 'NL'
			},
			// {
			// 	countryName: 'Netherlands',
			// 	countryCode: 'NL'
			// }
		],
		calculatedRates: store.calculatedRates
	};
}

function mapDispatchToProps(dispatch) {
	return {
		chartActions: bindActionCreators(chartActions, dispatch),
		globalSettingsActions: bindActionCreators(globalSettingsActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ComparisonChartsPage);
