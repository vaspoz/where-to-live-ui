import Button from "@material-ui/core/Button";
import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import {Avatar} from "@material-ui/core";
import FlightTakeoffIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {green, amber} from "@material-ui/core/colors";
import FlightLandIcon from '@material-ui/icons/FlightLand';

const useStyles = makeStyles(theme => ({
	icon: {
		backgroundColor: amber[500],
		height: '30px',
		width: '30px',
	}
}));

const LoginLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/compare-with" {...props} />);

const CompareToButton = () => {
	const classes = useStyles();

	return (
		<div>
			<IconButton onClick={() => {
			}} component={LoginLink}>
				<Avatar className={classes.icon} variant="rounded" sizes={'small'}>
					<FlightLandIcon fontSize={'small'}/>
				</Avatar>
			</IconButton>
		</div>
	);
};

export default CompareToButton;
