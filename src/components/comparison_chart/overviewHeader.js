import React from 'react';
import PropTypes from "prop-types";
import Flag from "./flag";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const style = {
	inner: {
		margin: 'auto'
	}
};


const overviewHeader = ({countryCode, countryName}) => {
	return (
		<Grid container style={{borderBottom: '1px solid lightgray'}}>
			<Grid item style={style.inner}>
				<Flag countryCode={countryCode}/>
			</Grid>
			<Grid item xs container direction={'column'} justify={'flex-start'}>
				<Grid item style={style.inner}>
					<Typography variant="h5">{countryName}</Typography>
					<Typography variant="caption" color="textSecondary">Country Overview</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

overviewHeader.propTypes = {
	countryCode: PropTypes.string.isRequired,
	countryName: PropTypes.string.isRequired
};

export default overviewHeader;
