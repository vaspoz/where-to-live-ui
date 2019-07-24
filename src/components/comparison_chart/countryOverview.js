import React from 'react';
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
	noOfCities: React.PropTypes.number,
	avgProfit: React.PropTypes.number,
	countryName: React.PropTypes.string.isRequired,
	countryCode: React.PropTypes.string.isRequired
};

export default countryOverview;
