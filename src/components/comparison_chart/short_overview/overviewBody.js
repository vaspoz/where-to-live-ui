import React from 'react';
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {makeStyles, Typography} from "@material-ui/core";
import {blue, green} from "@material-ui/core/colors";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
	stats: {
		marginTop: theme.spacing(3)
	},
	cityNumber: {
		fontWeight: 500,
		color: blue[300]
	},
	avgProfit: {
		fontWeight: 500,
		color: green[300]
	},
	button: {
		marginTop: theme.spacing(3)
	},
	circularProgress: {
		color: blue[500],
		marginTop: theme.spacing(12),
	}
}));

const overviewBody = ({noOfCities, avgProfit}) => {
	const classes = useStyles();

	return (
		<div>
			{noOfCities > 0 ?
				<Grid container direction='column' alignItems="center" justify="space-between">
					<Grid item>
						<Box className={classes.stats}>
							<Typography variant={'h2'} className={classes.cityNumber}>{noOfCities}</Typography>
							<Typography variant={'overline'}>Number of Cities</Typography>
						</Box>
					</Grid>
					<Grid item>
						<Box className={classes.stats}>
							<Typography variant={'h2'} className={classes.avgProfit}>{avgProfit}</Typography>
							<Typography variant={'overline'}>Average Profit</Typography>
						</Box>
					</Grid>
				</Grid>
				:
				<CircularProgress  className={classes.circularProgress}/>}
		</div>
	)
};

overviewBody.propTypes = {
	noOfCities: PropTypes.number,
	avgProfit: PropTypes.number
};

export default overviewBody;
