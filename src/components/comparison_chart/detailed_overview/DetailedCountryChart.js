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
import withStyles from "@material-ui/core/styles/withStyles";
import {Card} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import MinimizeIcon from '@material-ui/icons/Minimize';
import IconButton from "@material-ui/core/IconButton";
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import CardContent from "@material-ui/core/CardContent";

const styles = theme => {
	return {
		paper: {
			margin: '20px',
			textAlign: 'center',
			display: 'inline-block',
			height: '500px',
			width: '1000px'
		}
	};
};

class DetailedCountryChart extends React.Component {
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
				xAxes: [{
					ticks: {
						callback: function(value, index, values) {
							if (value.length > 10)
								value = value.substr(0, 9) + "...";
							return value;
						}
					}
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
			layout: {
				// padding: 20
			},
			maintainAspectRatio: false,
			title: {
				display: false
			}
		};
	}

	constructor(props, context) {
		super(props, context);
		this.getOverallChartDataIfExist = this.getOverallChartDataIfExist.bind(this);
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
		let chartData = chartDataOverall;
		const {classes} = this.props;


		return (
			<Card className={classes.paper}>
				<CardHeader
					title={this.props.countryName}
					subheader="High level chart"
					action={
						<IconButton onClick={this.props.onDetailsClick}>
							<FullscreenExitIcon />
						</IconButton>
					}
				/>
				<CardContent>
					<Bar
						width={500}
						height={400}
						data={chartData} options={DetailedCountryChart.getOptions(this.props.countryName)}/>
				</CardContent>
			</Card>
		);
	}
}

DetailedCountryChart.propTypes = {
	countryName: PropTypes.string.isRequired,
	onDetailsClick: PropTypes.func.isRequired,
	calculatedRates: PropTypes.object,
	classes: PropTypes.object
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DetailedCountryChart));
