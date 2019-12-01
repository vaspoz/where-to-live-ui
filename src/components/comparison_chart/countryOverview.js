import React from 'react';
import PropTypes from "prop-types";
import Paper from '@material-ui/core/Paper';
import OverviewHeader from './overviewHeader';
import OverviewBody from './overviewBody';
import {makeStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
		padding: theme.spacing(2),
		height: '400px',
		width: '300px',
		transition: 'box-shadow .3s',
		position: 'relative',
		"&:hover": {
			boxShadow: '0 4px 20px 0 rgba(0,0,0,.16)'
		}
	}
}));

const countryOverview = ({countryName, countryCode, noOfCities, avgProfit}) => {
	const classes = useStyles();

	return (
		<Grid item>
			<Paper className={classes.paper} key={countryName}>
				<OverviewHeader countryName={countryName} countryCode={countryCode}/>
				<OverviewBody avgProfit={avgProfit} noOfCities={noOfCities}/>
			</Paper>
		</Grid>
	);
};

countryOverview.propTypes = {
	noOfCities: PropTypes.number,
	avgProfit: PropTypes.number,
	countryName: PropTypes.string.isRequired,
	countryCode: PropTypes.string.isRequired
};

export default countryOverview;
