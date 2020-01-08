import React from 'react';
import PropTypes from "prop-types";
import Paper from '@material-ui/core/Paper';
import OverviewHeader from './overviewHeader';
import OverviewBody from './overviewBody';
import * as chartActions from "../../redux/actions/ChartActions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import withStyles from "@material-ui/core/styles/withStyles";
import DetailedCountryChart from "../detailed_overview/DetailedCountryChart";
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => {
	return {
		paper: {
			display: 'flex',
			flexDirection: 'column',
			textAlign: 'center',
			padding: theme.spacing(2),
			height: '345px',
			width: '300px',
			transition: 'box-shadow .3s',
			"&:hover": {
				boxShadow: '0 4px 20px 0 rgba(0,0,0,.16)'
			}
		}
	};
};

class ShortCountryOverview extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.getNoOfCities = this.getNoOfCities.bind(this);
		this.getAvgProfit = this.getAvgProfit.bind(this);
		this.getOverallChartDataIfExist = this.getOverallChartDataIfExist.bind(this);
	}

	getOverallChartDataIfExist(country) {
		const countryRates = this.props.calculatedRates
			.filter(rates => rates.country === country)[0];
		if (!countryRates)
			return null;
		return DetailedCountryChart.prepareOverallChart(countryRates.cityRates);
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
		const {classes} = this.props;
		const noOfCities = this.getNoOfCities(this.props.countryName);
		const averageProfit = this.getAvgProfit(this.props.countryName);

		return (
			<ButtonBase onClick={this.props.onDetailsClick}>
				<Paper className={classes.paper} key={this.props.countryName}>
					<OverviewHeader countryName={this.props.countryName} countryCode={this.props.countryCode}/>
					<OverviewBody avgProfit={averageProfit} noOfCities={noOfCities}/>
				</Paper>
			</ButtonBase>
		);
	}
}

function mapStateToProps(store) {
	return {
		calculatedRates: store.calculatedRates
	};
}

function mapDispatchToProps(dispatch) {
	return {
		chartActions: bindActionCreators(chartActions, dispatch)
	};
}

ShortCountryOverview.propTypes = {
	countryName: PropTypes.string.isRequired,
	countryCode: PropTypes.string.isRequired,
	onDetailsClick: PropTypes.func.isRequired,
	calculatedRates: PropTypes.object,
	classes: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ShortCountryOverview));
