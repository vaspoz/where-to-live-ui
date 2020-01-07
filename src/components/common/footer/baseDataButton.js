import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import {Avatar} from "@material-ui/core";
import {green, grey} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	},
	icon: {
		backgroundColor: green[500],
		height: '30px',
		width: '30px',
	},
	iconDisabled: {
		backgroundColor: grey[500],
		height: '30px',
		width: '30px',
	}
}));

const LoginLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/base-data" {...props} />);

const BaseDataButton = ({isDisabled}) => {
	const classes = useStyles();

	return (
		<div>
			<IconButton component={LoginLink} disabled={isDisabled}>
				<Avatar className={isDisabled ? classes.iconDisabled : classes.icon} variant="rounded" sizes={'small'}>
					<FlightTakeoffIcon fontSize={'small'}/>
				</Avatar>
			</IconButton>
		</div>
	);
};

BaseDataButton.propTypes = {
	isDisabled: PropTypes.bool.isRequired
};

export default BaseDataButton;
