import React from 'react';
import PropTypes from "prop-types";
import Paper from '@material-ui/core/Paper';
import {Bar} from 'react-chartjs-2';
import CircularProgress from "@material-ui/core/CircularProgress";
import * as chartActions from "../../redux/actions/ChartActions";
import * as globalSettingsActions from "../../redux/actions/GlobalSettingsActions";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import randomColor from "randomcolor";
import Button from "@material-ui/core/Button";

class DetailedCountryChart extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.getOverallChartDataIfExist = this.getOverallChartDataIfExist.bind(this);
	}

	static getRandomColors(amount, hue) {
		return randomColor({
			count: amount,
			hue: hue,
			luminosity: 'light'
		});
	}

	static getOptions(title) {
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

	static prepareCityRatesForChart(cityRates) {
		const labels = cityRates.map(singleCityRate => singleCityRate.city);
		return {
			labels: labels,
			datasets: [
				{
					label: 'Salary',
					data: cityRates.map(singleCityRate => singleCityRate.salary),
					backgroundColor: DetailedCountryChart.getRandomColors(labels.length, 'green'),
					borderWidth: 1
				},
				{
					label: 'Expenses',
					data: cityRates.map(singleCityRate => singleCityRate.expenses),
					backgroundColor: DetailedCountryChart.getRandomColors(labels.length, 'red')
				}
			]
		};
	}

	static prepareOverallChart(cityRates) {
		const labels = cityRates.map(singleCityRate => singleCityRate.city);
		return {
			labels: labels,
			datasets: [
				{
					label: 'Profit Value',
					data: cityRates.map(singleCityRate => singleCityRate.overall),
					backgroundColor: DetailedCountryChart.getRandomColors(labels.length, 'blue'),
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
		return DetailedCountryChart.prepareCityRatesForChart(countryRates.cityRates);
	}

	getOverallChartDataIfExist(country) {
		const countryRates = this.props.calculatedRates
			.filter(rates => rates.country === country)[0];
		if (!countryRates)
			return null;
		return DetailedCountryChart.prepareOverallChart(countryRates.cityRates);
	}

	render() {
		const chartDataOverall = this.getOverallChartDataIfExist(this.props.countryName);
		const chartDataDetailed = this.getChartDataIfExist(this.props.countryName);
		let chartData = chartDataDetailed;
		return (
			<Paper key={this.props.countryName} id="chart-paper" elevation={5}>
				{chartData ?
					<Bar id="chart" data={chartData} options={DetailedCountryChart.getOptions(this.props.countryName)}/>
					:
					"No data yet"}
				<Button variant="contained"
								color="primary"
								onClick={this.props.onDetailsClick}
				>
					Details
				</Button>
			</Paper>
		);
	}
}

DetailedCountryChart.propTypes = {
	countryName: PropTypes.string.isRequired,
	onDetailsClick: PropTypes.func.isRequired
};

function mapStateToProps(store) {
	return {
		baseCountry: store.baseData.country,
		baseCity: store.baseData.city,
		calculatedRates: store.calculatedRates
	};
}

function mapDispatchToProps(dispatch) {
	return {
		chartActions: bindActionCreators(chartActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedCountryChart);

/*
				<RefreshIndicator
					left={0}
					top={230}
					size={40}
					style={style.refresh}
					status="loading"
				/>
 */
