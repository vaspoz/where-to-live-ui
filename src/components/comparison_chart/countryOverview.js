import React from 'react';
import PropTypes from "prop-types";
import Paper from 'material-ui/Paper';
import OverviewHeader from './overviewHeader';
import OverviewBody from './overviewBody';

const countryOverview = ({countryName, countryCode, noOfCities, avgProfit}) => {
	return (
		<Paper key={countryName} id="chart-country-overview-paper" zDepth={2}>
			<OverviewHeader countryName={countryName} countryCode={countryCode}/>
			<OverviewBody avgProfit={avgProfit} noOfCities={noOfCities}/>
		</Paper>
	);
};

countryOverview.propTypes = {
	noOfCities: PropTypes.number,
	avgProfit: PropTypes.number,
	countryName: PropTypes.string.isRequired,
	countryCode: PropTypes.string.isRequired
};

export default countryOverview;
