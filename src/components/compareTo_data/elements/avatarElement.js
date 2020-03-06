import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from '@material-ui/core/styles';
import FlightLandIcon from '@material-ui/icons/FlightLand';

const useStyles = makeStyles(theme => ({
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.light
	}
}));

const AvatarElement = () => {
	const classes = useStyles();
	return (
			<Avatar className={classes.avatar}>
				<FlightLandIcon/>
			</Avatar>
	);
};

export default AvatarElement;
