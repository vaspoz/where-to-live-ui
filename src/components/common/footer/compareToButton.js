import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import {Avatar} from "@material-ui/core";
import {grey, amber} from "@material-ui/core/colors";
import FlightLandIcon from '@material-ui/icons/FlightLand';

const useStyles = makeStyles(theme => ({
	icon: {
		backgroundColor: amber[500],
		height: '30px',
		width: '30px',
	},
	iconDisabled: {
		backgroundColor: grey[500],
		height: '30px',
		width: '30px',
	}
}));

const LoginLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/compare-with" {...props} />);

const CompareToButton = ({isDisabled}) => {
	const classes = useStyles();

	return (
		<div>
			<IconButton component={LoginLink} disabled={isDisabled}>
				<Avatar className={isDisabled ? classes.iconDisabled : classes.icon} variant="rounded" sizes={'small'}>
					<FlightLandIcon fontSize={'small'}/>
				</Avatar>
			</IconButton>
		</div>
	);
};

CompareToButton.propTypes = {
	isDisabled: PropTypes.bool.isRequired
};

export default CompareToButton;
