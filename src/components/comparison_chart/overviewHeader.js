import React from 'react';
import Flag from "./flag";

const style = {
	divCountryName: {
		float: 'left'
	},
	h1: {
		marginBottom: '0px',
		marginTop: '0px'
	},
	span: {
		fontSize: 'small'
	}
};

const overviewHeader = ({countryCode, countryName}) => {
	return (
		<div id="overview-chart-header">
			<Flag countryCode={countryCode}/>
			<div style={style.divCountryName}>
				<h1 style={style.h1}>{countryName}</h1>
				<span style={style.span}>Country Overview</span>
			</div>
		</div>
	);
};

overviewHeader.propTypes = {
	countryCode: React.PropTypes.string.isRequired,
	countryName: React.PropTypes.string.isRequired
};

export default overviewHeader;
