import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from "react-router-dom";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import IconButton from "@material-ui/core/IconButton";
import {Avatar} from "@material-ui/core";
import {grey, deepPurple} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
	icon: {
		backgroundColor: deepPurple[500],
		height: '30px',
		width: '30px',
	},
	iconDisabled: {
		backgroundColor: grey[500],
		height: '30px',
		width: '30px',
	}
}));

const ChartLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/comparison-chart" {...props} />);

const CountriesOverviewButton = ({isDisabled}) => {
	const classes = useStyles();

	return (
		<div>
			<IconButton component={ChartLink} disabled={isDisabled}>
				<Avatar className={isDisabled ? classes.iconDisabled : classes.icon} variant="rounded" sizes={'small'}>
					<EqualizerIcon fontSize={'small'}/>
				</Avatar>
			</IconButton>
		</div>
	);
};

CountriesOverviewButton.propTypes = {
	isDisabled: PropTypes.bool.isRequired
};

export default CountriesOverviewButton;
