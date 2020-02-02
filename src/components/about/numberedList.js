import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {Avatar} from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	numbers: {
		backgroundColor: theme.palette.secondary.light,
		height: 35,
		width: 35,
		marginRight: 10
	}
}));

const NumberedList = ({number, text}) => {
	const classes = useStyles();
	return (
		<Grid container alignItems="center">
			<Grid item>
				<Avatar className={classes.numbers}>{number}</Avatar>
			</Grid>
			<Grid item xs>
				<Typography variant="body1" color="textPrimary">
					{text}
				</Typography>
			</Grid>
		</Grid>
	);
};

NumberedList.propTypes = {
	number: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default NumberedList;
