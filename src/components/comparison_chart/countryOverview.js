import React from 'react';
import Paper from 'material-ui/Paper';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Flag from './flag';

const style = {
	refresh: {
		display: 'inline-block',
		position: 'relative'
	}
};

const countryOverview = ({countryName, countryCode, chartData}) => {
	return (
		<Paper key={countryName} id="chart-country-overview-paper" zDepth={2}>
			<Flag countryCode={countryCode}/>
			<h1>{countryName}</h1>
			{chartData ? "" :
				<RefreshIndicator
					left={0}
					top={230}
					size={40}
					style={style.refresh}
					status="loading"
				/>}
		</Paper>
	);
};

countryOverview.propTypes = {
	chartData: React.PropTypes.object,
	countryName: React.PropTypes.string.isRequired,
	countryCode: React.PropTypes.string.isRequired
};

export default countryOverview;
